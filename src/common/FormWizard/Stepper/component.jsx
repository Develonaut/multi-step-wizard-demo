import React from "react";
import { Stepper, StepLabel, Step } from "@material-ui/core/";

export const WizardStepper = ({ steps, activeStep }) => {
  return (
    <Stepper alternativeLabel activeStep={activeStep}>
      {steps.map((step, idx) => (
        <Step key={step} completed={idx < activeStep}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
