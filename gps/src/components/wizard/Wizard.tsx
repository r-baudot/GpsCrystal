"use client";
import MuiStepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, ReactNode } from "react";
import { Button } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { useBDD } from "@/hooks/useBDD";

interface GpsPoint {
  label: string;
  latitude: string;
  longitude: string;
}

interface StepConfig {
  label: string;
  content: (
    gpsData: GpsPoint,
    setGpsData: (data: GpsPoint) => void,
  ) => ReactNode;
}

const STEPS: StepConfig[] = [
  {
    label: "Saisie du nom",
    content: (gpsData, setGpsData) => (
      <TextField
        label="Nom du point GPS"
        value={gpsData.label}
        onChange={(e) => {
          const value = e.target.value.replace(/[^a-zA-Z0-9À-ÿ\s-]/g, "");
          setGpsData({ ...gpsData, label: value });
        }}
        slotProps={{ htmlInput: { maxLength: 50 } }}
        fullWidth
      />
    ),
  },
  {
    label: "Saisie des coordonnées",
    content: (gpsData, setGpsData) => (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <NumericFormat
          customInput={TextField}
          label="Latitude"
          value={gpsData.latitude}
          onValueChange={(values) =>
            setGpsData({ ...gpsData, latitude: values.value })
          }
          decimalScale={6}
          allowNegative
          fullWidth
        />
        <NumericFormat
          customInput={TextField}
          label="Longitude"
          value={gpsData.longitude}
          onValueChange={(values) =>
            setGpsData({ ...gpsData, longitude: values.value })
          }
          decimalScale={6}
          allowNegative
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

const GPS_KEY = "gpsPoints";

export const Wizard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [gpsData, setGpsData] = useState<GpsPoint>({
    label: "",
    latitude: "",
    longitude: "",
  });
  const { set, get } = useBDD<GpsPoint[]>(GPS_KEY);

  const handleNext = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  const handleSave = () => {
    const points = get() || [];
    set([...points, gpsData]);
    setGpsData({ label: "", latitude: "", longitude: "" });
    setActiveStep(0);
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
