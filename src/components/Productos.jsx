import React, { Fragment, useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";
import { Producto } from "./Producto";

export const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Consultar la api
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);

  //obtener el state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  return (
    <div className="mx-3">
      <h2 className="text-center my-5">Pacientes</h2>
      {/* 
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center -mt-4">
          Hubo un error
        </p>
      ) : null}

      {cargando ? <p className="text-center">Cargando...</p> : null} */}

      <table className="table table-striped text-center">
        <thead className="bg-secondary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Número</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>

        {/* INSERTAR DATOS EN LA TABLA */}

        {/* {productos.length === 0
            ? "No hay productos"
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))} */}
      </table>
    </div>
  );
};
