"use client";
import MuiStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, ReactNode } from "react";
import { Button } from "@mui/material";

interface GPS {
  label: string;
  latitude: string;
  longitude: string;
}

interface StepConfig {
  label: string;
  content: (gpsData: GPS, setGpsData: (data: GPS) => void) => ReactNode;
}

const STEPS: StepConfig[] = [
  {
    label: "Saisie du nom",
    content: (gpsData, setGpsData) => (
      <TextField
        label="Nom du point GPS"
        value={gpsData.label}
        onChange={(e) => setGpsData({ ...gpsData, label: e.target.value })}
        fullWidth
      />
    ),
  },
  {
    label: "Saisie des coordonnées",
    content: (gpsData, setGpsData) => (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Latitude"
          type="number"
          value={gpsData.latitude}
          onChange={(e) => setGpsData({ ...gpsData, latitude: e.target.value })}
          fullWidth
        />
        <TextField
          label="Longitude"
          type="number"
          value={gpsData.longitude}
          onChange={(e) =>
            setGpsData({ ...gpsData, longitude: e.target.value })
          }
          fullWidth
        />
      </Box>
    ),
  },
  {
    label: "Récapitulatif avant sauvegarde",
    content: (gpsData) => (
      <Box>
        <h3>Récapitulatif</h3>
        <p>Nom : {gpsData.label}</p>
        <p>Latitude : {gpsData.latitude}</p>
        <p>Longitude : {gpsData.longitude}</p>
      </Box>
    ),
  },
];

export const Wizard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [gpsData, setGpsData] = useState<GPS>({
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
    console.log("Données sauvegardées:", gpsData);
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
      <Box sx={{ minHeight: 150, mb: 3 }}>
        {STEPS[activeStep].content(gpsData, setGpsData)}
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          Précédent
        </Button>
        {activeStep === STEPS.length - 1 ? (
          <Button variant="contained" onClick={handleSave}>
            Sauvegarder
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNext}>
            Suivant
          </Button>
        )}
      </Box>
    </Box>
  );
};
