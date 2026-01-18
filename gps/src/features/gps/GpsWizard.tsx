"use client";
import MuiStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button } from "@mui/material";
import { GpsPoint } from "@/types/gps";
import { GPS_FORM_STEPS } from "./gpsFormConfig";

interface GpsWizardProps {
  onSave: (point: GpsPoint) => void;
}

export const GpsWizard = ({ onSave }: GpsWizardProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [gpsData, setGpsData] = useState<GpsPoint>({
    label: "",
    latitude: "",
    longitude: "",
  });

  const handleNext = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  const handleSave = () => {
    onSave(gpsData);
    setGpsData({ label: "", latitude: "", longitude: "" });
    setActiveStep(0);
  };

  const isStepValid = () => {
    const currentStep = GPS_FORM_STEPS[activeStep];
    return currentStep.isValid ? currentStep.isValid(gpsData) : true;
  };

  return (
    <Box>
      <MuiStepper activeStep={activeStep} sx={{ mb: 3 }}>
        {GPS_FORM_STEPS.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </MuiStepper>
      <Box sx={{ minHeight: 150, mb: 3 }}>
        {GPS_FORM_STEPS[activeStep].content(gpsData, setGpsData)}
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          Précédent
        </Button>
        {activeStep === GPS_FORM_STEPS.length - 1 ? (
          <Button variant="contained" onClick={handleSave}>
            Sauvegarder
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNext} disabled={!isStepValid()}>
            Suivant
          </Button>
        )}
      </Box>
    </Box>
  );
};
