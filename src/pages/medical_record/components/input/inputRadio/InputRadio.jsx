import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useState } from 'react';

function InputRadio({
  values,  
  id,
  label,
  ...props}) {

  const [focused, setFocused] = useState(false);

  const handleFocus = e => {
    setFocused(true);
  };

  return (

     <FormControl>
       <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
       <RadioGroup
         aria-labelledby="demo-radio-buttons-group-label"
         name={props.name}
         onChange={props.onChange}
       >
         {
           values.map(element => (
             <FormControlLabel key={element.id} value={element.value} control={<Radio />} label={element.label} />
           ))
         }
       </RadioGroup>
     </FormControl>

  //   <div className={`inputContainer-radio input-radio`} >
  //   <p>{label}</p>
  //   <div>
  //   {values.map(element => (
  //   <div
  //          key={element.id}
  //        >
  //          <input
  //            {...props}
  //            id={element.value}
  //            value={element.value}
  //            onBlur={handleFocus}
  //            focused = {focused.toString()}
  //          /> 
  //          <label htmlFor={element.value}>{element.label}</label>
  //        </div>
        
  //    ))}
  //     </div>
  //  </div>
  );
}


    
  


export default InputRadio