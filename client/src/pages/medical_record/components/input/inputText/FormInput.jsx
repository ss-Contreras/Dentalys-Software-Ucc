import React from 'react';
import { useState } from 'react';
import "./formInput.css";

function Input({
  label,
  errorMessage,  
  id,
  ...props}) {

  const [focused, setFocused] = useState(false);

  const handleFocus = e => {
    setFocused(true);
  };

  return (
    <div className={'inputContainer'} >
      
      <label htmlFor={props.name}>{label}</label>
      <input 
      id={props.name}
      {...props}
      onBlur={handleFocus}
      focused = {focused.toString()}
      />
      <span>{errorMessage}</span>
    
	    
    </div>
  )
}

export default Input