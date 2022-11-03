import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ariaLabel = { "aria-label": "description" };

export default function Inputs() {
  return (
    <div className="mx-3">
      <h2 className="text-center my-5">CONTROL ABONO</h2>

      <Box
        component="paper"
        sx={{
          "& > :not(style)": { m: 3 },
        }}
        noValidate
        autoComplete="off"
      >
        <div class="container text-center ">
          <div class="row align-items-start">
            <div class="col-12 col-md-3">
              <input
                className="form-control border border-terciary rounded-pill px-3"
                placeholder="Nombre"
                type="text"
              />
            </div>
            <div class="col-12 col-md-3">
              <input
                className="form-control border border-terciary rounded-pill px-3"
                placeholder="Fecha"
                type="date"
              />
            </div>
            <div class="col-12 col-md-3">
              <input
                className="form-control border border-terciary rounded-pill px-3"
                placeholder="Telefono"
                type="number"
              />
            </div>
          </div>
        </div>

        <div className="container text-ligh ">
          <div className=" align-items-left">
          <div class="col-12 col-md-3 mb-3">
              <input
                className="form-control border border-terciary rounded-pill px-3"
                placeholder="Detartraje"
                type="text"
              />
            </div>
            <div class="col-12 col-md-3 mb-3">
              <input
                className="form-control border border-terciary rounded-pill px-3"
                placeholder="Alargamiento"
                type="text"
              />
            </div>
            <div class="col-12 col-md-3 mb-3">
              <input
                className="form-control border border-terciary rounded-pill px-3"
                placeholder="Temporal"
                type="text"
              />
            </div>
            <div class="col-12 col-md-3 mb-3">
              <input
                className="form-control border border-terciary rounded-pill px-3"
                placeholder="Blanqueamiento"
                type="text"
              />
            </div>
            <div class="col-12 col-md-3 mb-3">
              <input
                className="form-control border border-terciary rounded-pill px-3"
                placeholder="Protesis"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="container text-ligh ">
          <div class="col-12 col-md-3 mb-3">
              <input
                className="form-control border border-terciary rounded-pill px-3"
                placeholder="Total"
                type="number"
              />
            </div>
        </div>
      </Box>
    </div>
  );
}
