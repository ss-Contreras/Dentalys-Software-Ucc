from array import array
from flask import Flask, jsonify, request
from psycopg2 import connect, extras
from cryptography.fernet import Fernet

app = Flask(__name__)
key = Fernet.generate_key()

host = 'localhost'
port = 5432
dbname = 'coderon_dentalys_software'
user = 'postgres'
password = '2311'

# ------------------------------------------------------ FUNCTIONS ------------------------------------------------------


def getConnection():
    """
    Devuelve una conexión a la base de datos.

    Returns:
        connection: Objeto que conecta a la BD.

    """

    connection = connect(host=host, port=port, dbname=dbname,
                         user=user, password=password)

    return connection


# ------------------------------------------------------ USERS MANAGMENT ------------------------------------------------------


@app.get('/api/users')
def getUsers():
    """
    Retorna todos los usuarios registrados en base de datos.

    Retorna:
        JSON que contiene todos los usuarios.
    """

    conn = getConnection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute("SELECT * FROM users")

    users = cur.fetchall()

    cur.close()
    conn.close()

    return jsonify(users)


@app.post('/api/users')
def newUser():
    """
    Crea un nuevo usuario.

    Returns:
        JSON del usuario creado.
    """

    new_user = request.get_json()

    username = new_user['username']
    password = Fernet(key).encrypt(bytes(new_user['password'], 'utf-8'))

    conn = getConnection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute("INSERT INTO users (username, password) VALUES (%s, %s) RETURNING *",
                (username, password))

    new_user = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return jsonify(new_user)


@app.get('/api/users/<id>')
def getUserById(id):
    """
    Obtiene un usuario por ID.

    Arguments:
        id: Integer Id del usuario a buscar.

    Returns:
        El JSON del usuario.
    """

    conn = getConnection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute("SELECT * FROM users WHERE id = %s", (id,))

    user = cur.fetchone()

    cur.close()
    conn.close()

    if user is None:
        return jsonify({'message': 'Usuario no encontrado.'}), 404

    return jsonify(user)


@app.put('/api/users/<id>')
def updateUserById(id):
    """
    Actualiza un usuario por ID.

    Arguments:
        id: Integer Id del usuario.

    Returns:
        JSON con el usuario actualizado.
    """

    conn = getConnection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    new_user = request.get_json()
    username = new_user['username']
    password = Fernet(key).encrypt(bytes(new_user['password'], 'utf-8'))

    cur.execute("UPDATE users SET username = %s, password = %s WHERE id = %s RETURNING *",
                (username, password, id))

    updated_user = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    if updated_user is None:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    return jsonify(updated_user)


@app.delete('/api/users/<id>')
def deleteUserById(id):
    """
    Cambia el estado de un usuario, pasa de ser 'Active' a ser 'Erased'

    Arguments:
        id: Integer Id del usuario.

    Returns:
        JSON del usuario eliminado.
    """

    conn = getConnection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute("DELETE FROM users WHERE id = %s RETURNING *", (id,))

    user = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    if user is None:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    return jsonify(user)


# ----------------------------------------------------------- DOCTORS -----------------------------------------------------------


@app.get('/api/doctors')
def getAllDoctors():

    """
    Retorna todos los doctores registrados en base de datos.

    Retorna:
        JSON que contiene todos los doctores.
    """

    conn = getConnection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    sql = "SELECT us.username, pp.*, gs.state FROM doctors dc JOIN users us ON us.id = dc.id_user JOIN people pp ON pp.id = dc.id_person JOIN general_states gs ON gs.id = dc.status"

    cur.execute(sql)

    doctors = cur.fetchall()

    cur.close()
    conn.close()

    return jsonify(doctors)

    # conn = getConnection()
    # cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    # sql = "SELECT us.username, pp.*, gs.state FROM doctors dc JOIN users us ON us.id = dc.id_user JOIN people pp ON pp.id = dc.id_person JOIN general_states gs ON gs.id = dc.status"

    # cur.execute(sql)

    # doctors = cur.fetchall()

    # cur.close()
    # conn.close()

    # return jsonify(doctors)


@app.post('/api/doctors')
def newDoctor():
    """
    Crea un nuevo doctor/a.

    Returns:
        JSON del doctor/a creado.
    """

    new_doctor = request.get_json()

    conn = getConnection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    # Obtenemos los datos para crearle un usuario.
    username = new_doctor['username']
    password = Fernet(key).encrypt(bytes(new_doctor['password'], 'utf-8'))

    # Obtenemos sus datos personales.
    names = new_doctor['names']
    lastnames = new_doctor['lastnames']
    phone = new_doctor['phone']
    address = new_doctor['address']
    email = new_doctor['email']
    dni = new_doctor['dni']
    photo = new_doctor['photo']

    # Querys
    sqlUser = "INSERT INTO users (username, password) VALUES (%s, %s)"
    sqlPerson = "INSERT INTO people (names, lastnames, phone, address, email, dni, photo) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    sqlDoctor = ""

    cur.execute(
        sqlUser, (username, password) +
        sqlPerson, (names, lastnames, phone, address, email, dni, photo) +
        sqlDoctor, ()
    )

    cur.execute("INSERT INTO ")

    new_doctor = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    return jsonify(new_doctor)


@app.get('/api/doctors/<id>')
def getDoctorById(id):
    """
    Obtiene un doctor por ID.

    Arguments:
        id: Integer Id del doctor a buscar.

    Returns:
        El JSON del doctor.
    """

    conn = getConnection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute("SELECT * FROM doctors WHERE id = %s", (id,))

    doctor = cur.fetchone()

    cur.close()
    conn.close()

    if doctor is None:
        return jsonify({'message': 'Doctor no encontrado.'}), 404

    return jsonify(doctor)


@app.put('/api/doctors/<id>')
def updateDoctorById(id):
    """
    Actualiza un usuario por ID.

    Arguments:
        id: Integer Id del usuario.

    Returns:
        JSON con el usuario actualizado.
    """

    conn = getConnection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    new_user = request.get_json()
    username = new_user['username']
    password = Fernet(key).encrypt(bytes(new_user['password'], 'utf-8'))

    cur.execute("UPDATE users SET username = %s, password = %s WHERE id = %s RETURNING *",
                (username, password, id))

    updated_user = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    if updated_user is None:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    return jsonify(updated_user)


@app.delete('/api/doctors/<id>')
def deleteDoctorById(id):
    """
    Cambia el estado de un usuario, pasa de ser 'Active' a ser 'Erased'

    Arguments:
        id: Integer Id del usuario.

    Returns:
        JSON del usuario eliminado.
    """

    conn = getConnection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    cur.execute("UPDATE doctors SET status = 2 WHERE id = %s RETURNING *", (id,))

    doctor = cur.fetchone()

    conn.commit()
    cur.close()
    conn.close()

    if doctor is None:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    return jsonify(doctor)


if __name__ == '__main__':
    app.run(debug=True)
