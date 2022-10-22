import React from 'react'
import FormRadio from '../input/inputRadio/FormRadio';
import FormInput from '../input/inputText/FormInput'

function InputFactory(props) {

  return (
    <>
    {props.type === "radio" && (
        <FormRadio
        {...props}
        />
    )}
    {props.type !== "radio" && (
        <FormInput
        {...props}
        />
    )}

    </>
    
  )
}

export default InputFactory