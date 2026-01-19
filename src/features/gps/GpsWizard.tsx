"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SaveIcon from "@mui/icons-material/Save";
import { Gps } from "@/types/gps";
import { GPS_FORM_STEPS } from "./gpsFormConfig";

interface GpsWizardProps {
  onSave: (point: Gps) => void;
}

export const GpsWizard = ({ onSave }: GpsWizardProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [gpsData, setGpsData] = useState<Gps>({
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
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          bgcolor: "white",
          borderRadius: "20px",
          p: { xs: 2, sm: 4 },
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 3 }}>
          <Typography
            variant="h5"
            sx={{ color: "text.primary", fontWeight: 600 }}
          >
            Ajoutez vos points GPS
          </Typography>
          <ArrowDownwardIcon
            sx={{
              color: "#0084fd",
              fontSize: 24,
              animation: "bounce 1.5s ease-in-out infinite",
              "@keyframes bounce": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(6px)",
                },
              },
            }}
          />
        </Box>

        {/* Contenu de l'étape avec cercle gradient */}
        <Box sx={{ height: 180, mb: "12px", display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "transparent",
                border: "2px solid #0084fd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {activeStep + 1}/{GPS_FORM_STEPS.length}
              </Typography>
            </Box>
            <Typography sx={{ color: "text.primary", fontSize: "0.95rem" }}>
              {GPS_FORM_STEPS[activeStep].instruction}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {GPS_FORM_STEPS[activeStep].content(gpsData, setGpsData)}
          </Box>
        </Box>

        {/* Indicateurs d'étapes */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mb: 3,
          }}
        >
          {GPS_FORM_STEPS.map((step, index) => (
            <Box
              key={step.label}
              sx={{
                width: index === activeStep ? 24 : 8,
                height: 8,
                borderRadius: "4px",
                bgcolor: index <= activeStep ? "primary.main" : "rgba(0, 132, 253, 0.2)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            minHeight: 42,
          }}
        >
          <Button
            onClick={handleBack}
            disabled={activeStep === 0}
            startIcon={<ArrowBackIcon />}
            sx={{
              visibility: activeStep === 0 ? "hidden" : "visible",
              color: "text.primary",
              borderColor: "divider",
              height: 42,
              "&:hover": {
                borderColor: "primary.main",
                bgcolor: "rgba(0, 132, 253, 0.04)",
              },
            }}
            variant="outlined"
          >
            Précédent
          </Button>
          {activeStep === GPS_FORM_STEPS.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSave}
              startIcon={<SaveIcon />}
              sx={{
                background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
                color: "white",
                fontWeight: 700,
                height: 42,
                px: 4,
                "&:hover": {
                  background: "linear-gradient(135deg, #0074e0 0%, #00b0e0 100%)",
                  boxShadow: "0 8px 25px rgba(0, 132, 253, 0.35)",
                },
              }}
            >
              Sauvegarder
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!isStepValid()}
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
                color: "white",
                fontWeight: 700,
                height: 42,
                px: 4,
                "&:hover": {
                  background: "linear-gradient(135deg, #0074e0 0%, #00b0e0 100%)",
                  boxShadow: "0 8px 25px rgba(0, 132, 253, 0.35)",
                },
                "&:disabled": {
                  background: "rgba(0, 132, 253, 0.3)",
                  color: "white",
                },
              }}
            >
              Suivant
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
