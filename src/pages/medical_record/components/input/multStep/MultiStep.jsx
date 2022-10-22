
import React from 'react';
import { useState } from 'react'
import FormNavigation from '../../formNavigation/FormNavigation';
import multiStep from './multiStep.css';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


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
        <form onSubmit={handleSubmit}>
            <Stepper activeStep={stepNumber}>
                {steps.map(currentStep => {
                        const label = currentStep.props.stepName;
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })
                }
            </Stepper>
            {step}
            <FormNavigation isLastStep={isLastStep} hasPrevious={stepNumber>0} onBackClick={previous}></FormNavigation>
        </form>
    
  )
}   

export default MultiStep
export const FormStep = ({stepName = 'Holas', children}) => <div className="container-form">{children}</div>;