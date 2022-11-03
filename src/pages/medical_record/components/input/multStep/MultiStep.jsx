
import React from 'react';
import { useState } from 'react'
import FormNavigation from '../../formNavigation/FormNavigation';
import multiStep from './multiStep.css';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Card, CardContent } from '@mui/material';


function MultiStep({children, onSubmit}) {
    const [stepNumber, setStepNumber ] = useState(0);
    const steps = React.Children.toArray(children);


    const step = steps[stepNumber];
    const totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps -1 ;

    const next = () => {
        setStepNumber(stepNumber+1);
    };

    const previous = () => {
        setStepNumber(stepNumber-1);
    }

    const handleSubmit = (event) => {
        if (step.props.onSubmit) {
            step.props.onSubmit();
        }

        if(isLastStep){
            return onSubmit();
        }else{
            event.preventDefault();
            next();
        }
    }
  return (
    <div className='card-multiStep-container'>

        <div >
            <div className='card-multiStep-container__stepper'>
                <Card  sx={{ width: 1}}>
                    <CardContent>
                        <Stepper activeStep={stepNumber} orientation="vertical" >
                            {steps.map(currentStep => {
                                const label = currentStep.props.stepName;
                                
                                return (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </CardContent>
                </Card>
            </div>
        </div>
        <Card sx={{ width: 1}}>
            <CardContent>
                <div className='card-multiStep-container__step'>
                    <div className='card-multiStep-container__title'>
                        <h1>{step.props.stepName}</h1>
                    </div>
                    <div className='card-multiStep-container_content'>
                        <form onSubmit={handleSubmit}>
                            
                            {step}
                            <FormNavigation isLastStep={isLastStep} hasPrevious={stepNumber>0} onBackClick={previous}></FormNavigation>
                        </form>
                    </div>
                </div>
                
                
            </CardContent>
        </Card>
    </div>
        
    
  )
}   

export default MultiStep
export const FormStep = ({stepName = '', children}) => <div className="container-form">{children}</div>;