import { FormControl, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import './inputText.css';

function InputText({
  label,
  errorMessage,  
  id,
  pattern,
  ...props}) {

  const [focused, setFocused] = useState(false);
  const[error, setError] = useState(false);

  const handleFocus = e => {
    if (pattern){
      const validation = new RegExp (pattern);
      setError(!validation.test(props.value));
    }
  };

  return (

        <TextField
          id="component-error"
          label={label}
          error={error}
          {...props}
          onKeyUp={handleFocus}
          onBlur={handleFocus}
          inputProps={{pattern: pattern}}
          helperText={error ? errorMessage : ''}
        />
        

    // <div className={'inputText-container'} >
      
    //   <label className='inputText-container__label' htmlFor={props.name}>{label}</label>
    //   <input 
    //   className='inputText-container__input'
    //   id={props.name}
    //   {...props}
    //   onBlur={handleFocus}
    //   focused = {focused.toString()}
    //   />
    //   <span className='inputText-container__error-message'>{errorMessage}</span>
    
	    
    // </div>
  )
}

export default InputText