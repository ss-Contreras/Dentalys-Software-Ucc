import React from 'react';
import { useState } from 'react';
import "./formRadio.css";

function Input({
  values,  
  id,
  label,
  ...props}) {

  const [focused, setFocused] = useState(false);

  const handleFocus = e => {
    setFocused(true);
  };

  return (
    <div className={`inputContainer-radio input-radio`} >
      <p>{label}</p>
      <div>
      {values.map(element => (
        <div
          key={element.id}
        >
          <input
            {...props}
            id={element.value}
            value={element.value}
            onBlur={handleFocus}
            focused = {focused.toString()}
          /> 
          <label htmlFor={element.value}>{element.label}</label>
        </div>
        
      ))}
      </div>
    </div>
  )
}

export default Input