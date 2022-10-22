// import React, { Fragment, useEffect } from "react";

// //Redux
// import { useSelector, useDispatch } from "react-redux";
// import { obtenerProductosAction } from "../actions/productoActions";
// import { Producto } from "./Producto";

// export const Productos = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     //Consultar la api
//     const cargarProductos = () => dispatch(obtenerProductosAction());
//     cargarProductos();
//   }, []);

//   //obtener el state
//   const productos = useSelector((state) => state.productos.productos);
//   const error = useSelector((state) => state.productos.error);
//   const cargando = useSelector((state) => state.productos.loading);

//   return (
//     <Fragment>
//       <h2 className="text-center my-5">Pacientes</h2>


//     </Fragment>
//   );
// };