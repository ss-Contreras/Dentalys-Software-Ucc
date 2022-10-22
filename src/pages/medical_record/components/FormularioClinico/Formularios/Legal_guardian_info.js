export const Legal_guardian_info = [
    {
        id:1,
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
        id:2,
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
      id:3,
      name:"Apodo",
      type:"radio",
      label:"Apodo",
      values:[
        {
          id:1,
          value:"Santiago",
          label:"jhonpe"
        },
        {
          id:2,
          value:"Kevin",
          label:"Jonson",
        },
        {
          id:3,
          value:"Juanes",
          label:"Jhon pool"
        },
        {
          id:4,
          value:"Diego",
          label:"Egoista"
        }

      ]
    }
];