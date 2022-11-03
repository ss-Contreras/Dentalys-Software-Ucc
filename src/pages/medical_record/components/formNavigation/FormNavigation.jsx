import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';



function FormNavigation(props) {
  return (
    <div style={{ display: 'flex', justifyContent:'flex-end', gap:'10px'}}>
        {
            props.hasPrevious && (
                <ColorButtonOutline variant ="outlined" type='button' onClick={props.onBackClick}>
                    Back
                </ColorButtonOutline>
            )
        }
        <ColorButton variant="contained" type='submit' >{props.isLastStep ? 'Enviar' : 'Next'}</ColorButton>
    </div>
  )
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#28465A'),
  backgroundColor: 'var(--primary)',
  '&:hover': {
    backgroundColor: '#1c313e',
  },
}));

const ColorButtonOutline = styled(Button)(({ theme }) => ({
  color: 'var(--primary)',
  backgroundColor: 'transparent',
  borderColor: 'var(--primary)',
  
  '&:hover': {
    borderColor: '#1c313e',
    color: '#1c313e',
  },
}));

export default FormNavigation