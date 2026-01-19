import { ReactNode } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { NumericFormat } from "react-number-format";
import { Gps } from "@/types/gps";
import PlaceIcon from "@mui/icons-material/Place";

export interface StepConfig {
  label: string;
  instruction: string;
  content: (gpsData: Gps, setGpsData: (data: Gps) => void) => ReactNode;
  isValid?: (gpsData: Gps) => boolean;
}

export const GPS_FORM_STEPS: StepConfig[] = [
  {
    label: "Nom",
    instruction: "Veuillez saisir le nom de votre point GPS",
    content: (gpsData, setGpsData) => (
      <TextField
        label="Nom du point"
        placeholder="Ex: Tour Eiffel, Bureau, Maison..."
        value={gpsData.label}
        onChange={(e) => {
          const value = e.target.value.replace(/[^a-zA-Z0-9À-ÿ\s-]/g, "");
          setGpsData({ ...gpsData, label: value });
        }}
        slotProps={{ htmlInput: { maxLength: 50 } }}
        required
        sx={{ width: "100%", maxWidth: 400 }}
      />
    ),
    isValid: (gpsData) => gpsData.label.trim() !== "",
  },
  {
    label: "Coordonnées",
    instruction: "Entrez les coordonnées GPS de votre point",
    content: (gpsData, setGpsData) => (
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          maxWidth: 500,
          flexDirection: "row",
        }}
      >
        <NumericFormat
          customInput={TextField}
          label="Latitude"
          placeholder="-90 à 90"
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
          sx={{ flex: 1 }}
        />
        <NumericFormat
          customInput={TextField}
          label="Longitude"
          placeholder="-180 à 180"
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
          sx={{ flex: 1 }}
        />
      </Box>
    ),
    isValid: (gpsData) => gpsData.latitude !== "" && gpsData.longitude !== "",
  },
  {
    label: "Confirmation",
    instruction: "Vérifiez les informations avant de sauvegarder",
    content: (gpsData) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
          borderRadius: "12px",
          bgcolor: "white",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "12px",
            background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <PlaceIcon sx={{ color: "white", fontSize: 28 }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 500 }}>
              Nom
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {gpsData.label}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 500 }}>
              Latitude
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "monospace", fontWeight: 600, color: "primary.main" }}>
              {gpsData.latitude}°
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 500 }}>
              Longitude
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "monospace", fontWeight: 600, color: "secondary.main" }}>
              {gpsData.longitude}°
            </Typography>
          </Box>
        </Box>
      </Box>
    ),
  },
];

export const isFormValid = (gpsData: Gps): boolean => {
  return GPS_FORM_STEPS.every((step) => !step.isValid || step.isValid(gpsData));
};
