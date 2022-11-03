import React from 'react'
import InputRadio from '../input/inputRadio/InputRadio';
import InputText from '../input/inputText/InputText'

function InputFactory(props) {

  return (
    <>
    {props.type === "radio" && (
        <InputRadio
        {...props}
        />
    )}
    {props.type !== "radio" && (
        <InputText
        {...props}
        />
    )}

    </>
    
  )
}

export default InputFactory