import React from 'react';
import Button from '@mui/material/Button';

function FormNavigation(props) {
  return (
    <div>
        {
            props.hasPrevious && (
                <Button variant ="outlined" type='button' onClick={props.onBackClick}>
                    Back
                </Button>
            )
        }
        <Button variant="contained" type='submit' >{props.isLastStep ? 'Enviar' : 'Next'}</Button>
    </div>
  )
}

export default FormNavigation