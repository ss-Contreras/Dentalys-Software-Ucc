import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(fecha, descripcion,  abono) {
    return { fecha, descripcion, abono};
  }
  
  const rows = [
    createData('24/2/2022',  24, 4.0),
    createData('24/2/2022',  37, 4.3),

  ];


const ariaLabel = { 'aria-label': 'description' };




export default function Inputs() {
  return (
    <div className="mx-3">
    <h2 className="text-center my-5">CONTROL  ABONO</h2>
    
    <Box 

    component="paper"   
      sx={{
        '& > :not(style)': {  m: 3 },
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
        <Input placeholder="FECHA" text-center type="date"  inputProps={ariaLabel} />
        </div>
        <div class="col">
        <Input placeholder="TELEFONO" type="number" inputProps={ariaLabel} />
        </div>
    </div>
    </div>

    </Box>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="center"> FECHA </StyledTableCell>
            <StyledTableCell  align="center" >DESCRIPCION</StyledTableCell>
            <StyledTableCell  align="center"> ABONO</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.fecha}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.fecha}
              </StyledTableCell>
              <StyledTableCell  align="center" >{row.descripcion}</StyledTableCell>
              <StyledTableCell align="center" >{row.abono}</StyledTableCell>
             
        
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   
   
  );
}