import { ReactNode } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { NumericFormat } from "react-number-format";
import { Gps } from "@/types/gps";

export interface StepConfig {
  label: string;
  content: (gpsData: Gps, setGpsData: (data: Gps) => void) => ReactNode;
  isValid?: (gpsData: Gps) => boolean;
}

export const GPS_FORM_STEPS: StepConfig[] = [
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
        required
        fullWidth
      />
    ),
    isValid: (gpsData) => gpsData.label.trim() !== "",
  },
  {
    label: "Saisie des coordonnées",
    content: (gpsData, setGpsData) => (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <NumericFormat
          customInput={TextField}
          label="Latitude (-90 à 90)"
          value={gpsData.latitude}
          onValueChange={(values) =>
            setGpsData({ ...gpsData, latitude: values.value })
          }
          decimalScale={6}
          allowNegative
          isAllowed={(values) => {
            const { floatValue } = values;
            return floatValue === undefined || (floatValue >= -90 && floatValue <= 90);
          }}
          required
          fullWidth
        />
        <NumericFormat
          customInput={TextField}
          label="Longitude (-180 à 180)"
          value={gpsData.longitude}
          onValueChange={(values) =>
            setGpsData({ ...gpsData, longitude: values.value })
          }
          decimalScale={6}
          allowNegative
          isAllowed={(values) => {
            const { floatValue } = values;
            return floatValue === undefined || (floatValue >= -180 && floatValue <= 180);
          }}
          required
          fullWidth
        />
      </Box>
    ),
    isValid: (gpsData) => gpsData.latitude !== "" && gpsData.longitude !== "",
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

export const isFormValid = (gpsData: Gps): boolean => {
  return GPS_FORM_STEPS.every((step) => !step.isValid || step.isValid(gpsData));
};
