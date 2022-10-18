import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

//Actions de redux
import { crearNuevoProductoAction } from "../actions/productoActions";
import {
  mostrarAlertaAction,
  ocultarAlertaAcction,
} from "../actions/alertaActions";

const options = [
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
];

const NuevoProducto = () => {
  const { register, control, handleSubmit } = useForm();
  const navigate = useNavigate();

  //State del componente
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState();

  // utlizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  //Acceder al state del store
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  //Manda a llamar el action de productoActions
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  //Cuando el usuario haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //validar formulario
    if (nombre.trim() === "" || precio <= 0) {
      const respuesta = {
        msg: "Ambos campos son obligatorios",
        classes: "alert alert-danger text-center p3",
      };
      dispatch(mostrarAlertaAction(respuesta));

      return;
    }
    //si no hay errores
    dispatch(ocultarAlertaAcction());

    //crear el nuevo producto
    agregarProducto({
      nombre,
      precio,
    });

    // Redireccionar
    navigate("/");
  };

  return (
    <div className="row min-vh-100 my-4 ">
      <div className="col-lg-5 col-md-5 col-5 mx-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agendar pacientes
            </h2>

            {/* {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null} */}

            <form className="" onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <b>Primer nombre</b>
                <input
                  type="text"
                  className="form-control"
                  name="nombrePrimero"
                  // value={nombre}
                  // onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <b>Segundo nombre</b>
                <input
                  type="text"
                  className="form-control"
                  name="nombreSegundo"
                  // value={nombre}
                  // onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <b>Primer apellido</b>
                <input
                  type="text"
                  className="form-control"
                  name="apellidoPrimero"
                  // value={nombre}
                  // onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <b>Segundo apellido</b>
                <input
                  type="text"
                  className="form-control"
                  name="apellidoSegundo"
                  // value={nombre}
                  // onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <b>Telefono paciente</b>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Telefono"
                  name="precio"
                  // value={precio}
                  // onChange={(e) => setPrecio(Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <b>Fecha de cita</b>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Fecha"
                  name="precio"
                  disabled="true"
                  // value={precio}
                  // onChange={(e) => setPrecio(Number(e.target.value))}
                />
              </div>
              <div className="row form-group">
                <div className="col-12 col-sm-6">
                  <b>Hora</b>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Fecha"
                    name="precio"
                    // value={precio}
                    // onChange={(e) => setPrecio(Number(e.target.value))}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <b>Tiempo</b>
                  <div className="col-12 ">
                    <Controller
                      name="tipoDocumento2"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={options}
                          placeholder="Seleccione"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-secondary font-weight-bold d-block w-100"
              >
                Agregar
              </button>
            </form>

            {/* {cargando ? <p>Cargando...</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                Hubo un error
              </p>
            ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NuevoProducto;
