export const Paient_info = [
    {
        id: 1,
        name:"lastname",
        type:"text",
        label:"Apellido",
        pattern: "^[A-Za-z0-9]{3,16}$",
        errorMessage:
        "Lastname should be 3-16 characters and shouldn't include any special character!",
        required: true,
        
    },
    {
        id:2,
        name:"name",
        type:"text",
        placeholder:"Nombre",
        label:"Nombre",
        pattern: "^[A-Za-z0-9]{3,16}$",
        errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
        required: true,
    },
    {
        id:3,
        name:"birthday",
        type:"date",
        label:"Fecha de nacimiento",
    },
    {
        id:4,
        name:"age",
        type:"number",
        placeholder:"Edad",
        label:"Edad",
    },
    {
        id:5,
        name:"identification",
        type:"radio",
        label:"Identificacion",
        values:[
            {   
                id:1,
                value:"C.C",
                label:"Cedula"
            },
            {
                id:2,
                value:"T.I",
                label:"Tarjeta de identidad"
            },
            {
                id:3,
                value:"R.C",
                label:"No se"
            }
        ]

    },
    {
        id:6,
        name:"personalId",
        type:"text",
        placeholder:"No.",
        label:"Numero"

    },
    {
        id:7,
        name:"maritalStatus",
        type:"radio",
        label:"Estado Civil",
        values:[
            {
                id:1,
                value:"married",
                label:"Casado"
            },
            {
                id:2,
                value:"unmarried",
                label:"Soltero"
            }
        ]
    },
    {
        id:8,
        name:"gender",
        type:"radio",
        label:"Sexo",
        values:[
            {
                id:1,
                value:"female",
                label:"Mujer"
            },
            {
                id:2,
                value:"male",
                label:"Hombre"
            }
        ]
    },
    {
        id:9,
        name:"job",
        type:"text",
        placeholder:"Ocupación",
        label:"Ocupación"
    },
    {
        id:10,
        name:"departamento",
        type:"text",
        placeholder:"Departamento",
        label:"Departamento"
    },
    {
        id:11,
        name:"municipio",
        type:"text",
        placeholder:"Municipio",
        label:"Municipio"
    },
    {
        id:12,
        name:"phone",
        type:"text",
        placeholder:"No.",
        label:"Telefono"
    },
    {
        id: 14,
        name:"direccionResidencia",
        type: "text",
        placeholder: "Residencia",
        label:"Residencia",
    },
    {
        id: 15,
        name:"residenciaPhone",
        type:"number",
        placeholder:"No.",
        label:"Tel. Residencia",
    },
    {
        id: 16,
        name:"workaddress",
        type:"text",
        placeholder:"Direccion",
        label:"Direccion Trabajo",
    },
    {
        id: 17,
        name:"companyName",
        type:"text",
        placeholder:"Nombre de la empresa",
        label:"Nombre de la empresa"
    },
    {
        id:18,
        name:"companyPhone",
        type:"number",
        placeholder:"No.",
        label:"Tel. Empresa",
    },
    {
        id: 19,
        name:"workPosition",
        type:"text",
        placeholder:"Cargo",
        label:"Cargo"
    },

];