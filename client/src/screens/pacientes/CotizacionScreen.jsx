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
            <div class="col">
              <Input placeholder="NOMBRE" type="text" inputProps={ariaLabel} />
            </div>
            <div class="col">
              <Input
                placeholder="FECHA"
                text-center
                type="date"
                inputProps={ariaLabel}
              />
            </div>
            <div class="col">
              <Input
                placeholder="TELEFONO"
                type="number"
                inputProps={ariaLabel}
              />
            </div>
          </div>
        </div>

        <div className="container text-ligh ">
          <div className="col align-items-start">
            <div class="col">
              <Input
                placeholder="DETARTRAJE"
                type="text"
                inputProps={ariaLabel}
              />
            </div>
            <div className="col">
              <Input
                placeholder="ALARGAMIENTO"
                type="text"
                inputProps={ariaLabel}
              />
            </div>
            <div className="col">
              <Input
                placeholder="TEMPORAL"
                type="text"
                inputProps={ariaLabel}
              />
            </div>
            <div className="col">
              <Input
                placeholder="BLANQUEAMIENTO"
                type="text"
                inputProps={ariaLabel}
              />
            </div>
            <div className="col">
              <Input
                placeholder="PROTESIS"
                type="text"
                inputProps={ariaLabel}
              />
            </div>
          </div>
        </div>
        <div className="container text-ligh ">
          <div className="col align-items-start">
            <div className="col">
              <Input placeholder="TOTAL" type="text" inputProps={ariaLabel} />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
