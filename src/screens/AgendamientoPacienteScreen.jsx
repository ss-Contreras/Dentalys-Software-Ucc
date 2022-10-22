import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Stack from "@mui/material/Stack";

import Imagenes from "../assets/Imagenes";

//imagen
import usuarioPerfil from "../assets/img/usuarioPerfil.svg";
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

const optionTimes = [
  { label: "Atencion Primera Vez", value: "APV" },
  { label: "Cliente Frecuente", value: "CF" },
  { label: "Cliente Regular", value: "CR" },
  { label: "Urgencia", value: "UR" },
  { label: "Otro", value: "OT" },
];

const NuevoProducto = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  //State del componente
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState();
  const [value, setValue] = React.useState(null);

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
    <div className="row min-vh-100">
      <div className="col-12 col-sm-12 col-lg-12 justify-content-end">
        <h3 className="mt-3 mb-0 text-center mb-6 font-weight-bold">
          Agendamiento de pacientes
        </h3>
      </div>

      <div className="col-lg-8 col-md-8 col-12 mx-auto">
        <div className="justify-content-center card">
          <div className="card-body">
            <h4 className="text-center mb-4 ">Agendar pacientes</h4>

            {/* {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null} */}

            <form className="" onSubmit={submitNuevoProducto}>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img src={usuarioPerfil} class="img-fluid" alt="..." />
                </div>
                <div className="flex-grow-1">
                  <div className="form-group col-12 col-sm-12 col-lg-12 ">
                    <input
                      type="text"
                      className="form-control"
                      name="nombreCompleto"
                      placeholder="Nombre"
                      // value={nombre}
                      // onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-lg-12">
                    <input
                      type="number"
                      className="form-control"
                      name="rut"
                      placeholder="Rut"
                      // value={nombre}
                      // onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-lg-12">
                    <label htmlFor="namedInput">
                      Si no tiene el rut puede poner momentaneamente 1-9
                    </label>
                  </div>
                  <div className="form-group col-12 col-sm-12 col-lg-12">
                    <input
                      type="mail"
                      className="form-control"
                      name="correo"
                      placeholder="Correo"
                      // value={nombre}
                      // onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-lg-12">
                    <input
                      type="number"
                      className="form-control"
                      name="numeroTelefono"
                      placeholder="Numero telefonico"
                      // value={nombre}
                      // onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="nombreClinica"
                  placeholder="Clinica odontologica"
                  // value={nombre}
                  // onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              {/* <div className="row">
                <div className="form-group col-12 col-sm-6 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="apellidoSegundo"
                    placeholder="Odontologo"
                    // value={nombre}
                    // onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="form-group col-12 col-sm-6 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="apellidoSegundo"
                    placeholder="Atencion"
                    // value={nombre}
                    // onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
              </div> */}

              <div className="row">
                <div className="form-group col-12 col-sm-6 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    name="nombreOdontologo"
                    placeholder="Odontologo"
                    // value={nombre}
                    // onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="form-group col-12 col-sm-6 col-lg-6">
                  <Controller
                    name="seleccioneVivero"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={optionTimes}
                        placeholder="Seleccionar"
                      />
                    )}
                  />
                  {errors.seleccioneVivero && (
                    <small className="text-danger">
                      Este campo es obligatorio
                    </small>
                  )}
                </div>
              </div>

              <div className="row"></div>

              <div className="row"></div>

              <div className="d-flex align-items-center">
                <div className="flex-grow-0">
                <div className="form-group col-12 col-sm-6 col-lg-6">
                    <Stack component="form" noValidate spacing={3}>
                      <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Stack>
                  </div>
                  <div className="form-group col-12 col-sm-6 col-lg-6">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Hora"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="flex-shrink-2 col-12 col-sm-8 col-lg-8 ">
                  <div className="input-group input-group-dynamic flex-column my-3">
                    <textarea
                      className="multisteps-form__textarea form-control p-0 w-auto "
                      type="text"
                      placeholder="Observaciones"
                      name="nombre"
                      {...register("nombre", { required: true })}
                    />
                  </div>
                </div>
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

      {/* <div className="col-lg-2 col-md-2 col-2 mx-auto"></div> */}
    </div>
  );
};
export default NuevoProducto;
