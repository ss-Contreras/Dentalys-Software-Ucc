
import React, { useState } from "react";
import InputFactory from "./components/inputFactory/InputFactory";
import './medicalRecord.css';
import MultiStep from "./components/input/multStep/MultiStep";
import { FormStep } from "./components/input/multStep/MultiStep";
import { Legal_guardian_info, Medical_record_info, Paient_info } from "./components/FormularioClinico/Formularios";

function LegalGuardianInfo() {
  
  const [values, setValues] = useState({
    lastname: "",
    name: "",
    birthday: "",
    age: "",
    identification: "",
    personalId:"",
    maritalStatus:"",
    gender:"",
    job:"",
    departamento:"",
    municipio:"",
    phone:"",

  });

  const [values2, setValues2] = useState({
    heartConditions:"",
    hypertension:"",
    mellitusDiabetes:""
  });


  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div className="qhahhha">
        <MultiStep onSubmit={()=> alert (JSON.stringify(values,null, 2))}> 
          <FormStep stepName='Datos personales del paciente' onSubmit={() => console.log('Step1 onSubmit')} >
            {
              Paient_info.map((input) => (
                    <InputFactory 
                        key={input.id} 
                        {...input} 
                        value={values[input.name]} 
                        onChange={onChange}
                    /> 
              ))
            }

          </FormStep>
          <FormStep stepName='Persona responsable' onSubmit={() => console.log('Step2 onSubmit')}>
            {
              Legal_guardian_info.map((input) => (
                <InputFactory 
                    key={input.id} 
                    {...input} 
                    value={values[input.name]} 
                    onChange={onChange}
                />
                
              ))
            }
          </FormStep>
          <FormStep stepName='Antecedentes' onSubmit={() => console.log('Step3 onSubmit')}>
            {
              Medical_record_info.map((input) => (
                <InputFactory 
                    key={input.id} 
                    {...input} 
                    value={values2[input.name]} 
                    onChange={onChange}
                />
              
              ))
            }
          </FormStep>
        </MultiStep> 
    </div>
    
  )
}

export default LegalGuardianInfo;
