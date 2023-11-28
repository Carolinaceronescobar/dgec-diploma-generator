import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DGECForm from './Form/DGECForm';
import RegistroCurricularForm from './Form/RegistroCurricularForm';
import AdmisionForm from './Form/AdmisionForm';
import FinanzasForm from './Form/FinanzasForm';
import SolicitudesForm from './Form/SolicitudesForm';

const steps = [
  'Autorización',
  'Registro Curricular',
  'Admisión',
  'Finanzas',
  'Solicitudes',
];

const forms = [
  <DGECForm />,
  <RegistroCurricularForm />,
  <AdmisionForm />,
  <FinanzasForm />,
  <SolicitudesForm solicitudes={[]} />,
];

const HorizontalLinearStepper: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  
  return (
    <Box sx={{ width: '100%' }}>
      
      {/* Pasos del formulario */}
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} sx={{
                  color: activeStep === index ? '#004B85' : 'inherit',
                  fontFamily: 'Roboto Condensed, sans-serif',
                }} 
                >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
      {/* Formulario */}
      {forms[activeStep]}
      
      {/* CTAs del Stepper */}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1, color: '#004B85'}}
        >
          Atrás
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {isStepOptional(activeStep) && (
          <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, color: '#004B85' }}>
            Skip
          </Button>
        )}
        <Button onClick={handleNext} sx={{ color: '#004B85' }}> 
          {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
        </Button>
      </Box>
    </Box>
    
  );
};

export default HorizontalLinearStepper;
