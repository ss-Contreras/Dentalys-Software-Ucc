export const Legal_guardian_info = [
    {
        id:1,
        name:"name",
        type:"text",
        label:"Nombre",
        pattern: "^[A-Za-z0-9]{3,16}$",
        errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
        required: true,
    },
    {
        id:2,
        name:"id",
        type:"text",
        label:"Cedula",
        pattern: "^[0123456789]{5,13}$",
        errorMessage:
        "Username should be 5-13 characters and shouldn't include any special character!",
        required: true,
    },
    {
        id:3,
        name:"relationship",
        label:"Parentesco",
        pattern: "^[A-Za-z0-9]{3,16}$",
        errorMessage:
        "Username should be 5-13 characters and shouldn't include any special character!",
        required: true,
    },
    {
        id:4,
        name:"job_Legal_guardian",
        type:"text",
        label:"Ocupacion",
        pattern: "^[A-Za-z0-9]{3,16}$",
        errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
        required: true,
    },
    {
        id:5,
        name:"phone_legal_guardian",
        type:"text",
        placeholder:"No.",
        label:"Telefono"
    },
    {
        id: 6,
        name:"direccionResidencia_legal_guardian",
        type: "text",
        placeholder: "Residencia",
        label:"Residencia",
    },
    {
        id: 7,
        name:"residenciaPhone_legal_guardian",
        type:"number",
        placeholder:"No.",
        label:"Tel. Residencia",
    },
    {
        id: 8,
        name:"workaddress_legal_guardian",
        type:"text",
        placeholder:"Direccion",
        label:"Direccion Trabajo",
    },
    {
        id:9,
        name:"companyPhone_legal_guardian",
        type:"number",
        placeholder:"No.",
        label:"Tel. Empresa",
    },

];