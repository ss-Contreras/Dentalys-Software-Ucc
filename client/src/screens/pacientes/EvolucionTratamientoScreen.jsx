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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(fecha, evoluciontratamiento, firmapaciente) {
  return { fecha, evoluciontratamiento, firmapaciente };
}

const rows = [

];



export default function Inputs() {
  return (
    <div className="mx-3">
      <h2 className="text-center my-5">EVOLUCION DE TRATAMIENTO</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"> FECHA </StyledTableCell>
              <StyledTableCell align="center">EVOLUCION DE TRATAMIENTO</StyledTableCell>
              <StyledTableCell align="center"> FIRMA PACIENTE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.fecha}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.fecha}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.evoluciontratamiento}
                </StyledTableCell>
                <StyledTableCell align="center">{row.firmapaciente}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
