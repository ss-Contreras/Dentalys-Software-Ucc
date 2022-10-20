
{/*}
function LegalGuardianInfo() {

  return (
    <>
      <label htmlFor="lastName">
        <span>Apellidos</span>
        <input type="text" id="lastname" />
      </label>
      <label htmlFor="name">
        <span>Nombres</span>
        <input type="text" id="name" />
      </label>
      <label htmlFor="birthDate">
        <span>Fecha de nacimiento</span>
        <input type="text" id="birthDate" />
      </label>
      <label htmlFor="age">
        <span>Edad</span>
        <input type="number" id="age" />
      </label>
      <div>
        <span>Identificación</span>
        <label htmlFor="cc">
          <input type="radio" id="cc" />
          <span>C.C</span>
        </label>
        <label htmlFor="ti">
          <input type="radio" id="ti" />
          <span>T.I</span>
        </label>
        <label htmlFor="rc">
          <input type="radio" id="rc" />
          <span>R.C</span>
        </label>
        <label htmlFor="personalId">
          <span>No.</span>
          <input type="text" id="personalId" />
        </label>
      </div>

      <label htmlFor="maritalStatus">
        <span>Estado civil</span>
        <select name="Estado Civil" id="maritalStatus">
          <option value="Casado"></option>
          <option value="Soltero"></option>
        </select>
      </label>
      <label htmlFor="gender">
        <span>Sexo</span>
        <select name="Sexo" id="gender">
          <option value="Masculino"></option>
          <option value="Femenino"></option>
        </select>
      </label>
      <label htmlFor="job">
        <span>Ocupación</span>
        <input type="text" id="job" />
      </label>
      <label htmlFor="job">
        <span>Ocupación</span>
        <input type="text" id="job" />
      </label>
      <label htmlFor="region">
        <span>Departamento</span>
        <input type="text" id="region" />
      </label>
      <label htmlFor="municipio">
        <span>Municipio</span>
        <input type="text" id="municipio" />
      </label>
      <label htmlFor="phone">
        <span>Celular</span>
        <input type="text" id="phone" />
      </label>
      <label htmlFor="direccionResidencia">
        <span>Dirección residencia</span>
        <input type="text" id="direccionResidencia" />
      </label>
      <label htmlFor="residenciaPhone">
        <span>Tel. residencia</span>
        <input type="text" id="residenciaPhone" />
      </label>
      <label htmlFor="direccionTrabajo">
        <span>Dirección trabajo</span>
        <input type="text" id="direccionTrabajo" />
      </label>
      <label htmlFor="companyPhone">
        <span>Tel. empresa</span>
        <input type="text" id="companyPhone" />
      </label>
      <label htmlFor="companyName">
        <span>Nombre de la empresa</span>
        <input type="text" id="companyName" />
      </label>
    </>
  );
}
{*/}

import React, { useState } from "react";
import InputFactory from "./components/inputFactory/InputFactory";
import personalForm from "./personalForm.css";
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

  const [step, setStep] = useState(1);


  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="qhahhha">

        <MultiStep onSubmit={()=> alert (JSON.stringify(values,null, 2))}> 
          <FormStep stepName='primero' onSubmit={() => console.log('Step1 onSubmit')} >
            {
              Medical_record_info.map((input) => (
                    <InputFactory 
                        key={input.id} 
                        {...input} 
                        value={values[input.name]} 
                        onChange={onChange}
                    /> 
              ))
            }

          </FormStep>
          <FormStep stepName='segundo' onSubmit={() => console.log('Step2 onSubmit')}>
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
          <FormStep stepName='tercero' onSubmit={() => console.log('Step3 onSubmit')}>
            {
              Paient_info.map((input) => (
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
        {/* <form action="">
            <div className="container-form">
            {step === 1 && (

                Paient_info.map((input) => (
                    <InputFactory 
                        key={input.id} 
                        {...input} 
                        value={values[input.name]} 
                        onChange={onChange}
                    />
                  
                ))
            )}
            {step === 2 && (
                Legal_guardian_info.map((input) => (
                    <InputFactory 
                        key={input.id} 
                        {...input} 
                        value={values[input.name]} 
                        onChange={onChange}
                    />
                    
                ))

            )}
            {step === 3 && (
                Medical_record_info.map((input) => (
                    <InputFactory 
                        key={input.id} 
                        {...input} 
                        value={values2[input.name]} 
                        onChange={onChange2}
                    />
                  
                ))
            )}
            </div>
            {
              step >= 3 && (
                <input type="submit" value="enviar"/>
              )
              
            }
            {
              step <3 && (
                <button type="button" onClick={()=> setStep(step+1)}>Next</button>
              )
            }
            
            
        </form> */}
        
       
    </div>
    
  )
}

export default LegalGuardianInfo;
