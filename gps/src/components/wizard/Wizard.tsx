"use client";
import MuiStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { useState } from "react";
import { Button } from "@mui/material";

export interface StepConfig {
  label: string;
  content: ReactNode;
}

export interface StepperProps {
  steps: StepConfig[];
  activeStep: number;
}
const STEPS = [
  {
    label: "Saisie du nom",
    content: <div>Contenu de l'étape 1 : Saisie du nom</div>,
  },
  {
    label: "Saisie des coordonnées",
    content: <div>Contenu de l'étape 2 : Saisie des coordonnées</div>,
  },
  {
    label: "Récapitulatif avant",
    content: <div>Contenu de l'étape 3 : Récapitulatif avant</div>,
  },
];

export const Wizard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  return (
    <Box>
      <MuiStepper activeStep={activeStep} sx={{ mb: 3 }}>
        {STEPS.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </MuiStepper>
      <Box>{STEPS[activeStep].content}</Box>
      <Box>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          Précédent
        </Button>
        {activeStep !== STEPS.length - 1 && (
          <Button onClick={handleNext}>Suivant</Button>
        )}
      </Box>
    </Box>
  );
};
