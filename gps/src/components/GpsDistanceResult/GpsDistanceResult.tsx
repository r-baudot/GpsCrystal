import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RouteIcon from "@mui/icons-material/Route";

interface GpsDistanceResultProps {
  pointALabel: string;
  pointBLabel: string;
  distance: string;
}

export const GpsDistanceResult = ({
  pointALabel,
  pointBLabel,
  distance,
}: GpsDistanceResultProps) => {
  return (
    <Box
      sx={{
        mt: 3,
        p: 3,
        borderRadius: "16px",
        background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
        display: "flex",
        alignItems: "center",
        gap: 3,
        boxShadow: "0 8px 24px rgba(0, 132, 253, 0.25)",
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: "14px",
          bgcolor: "rgba(255, 255, 255, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <RouteIcon sx={{ color: "white", fontSize: 32 }} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            mb: 0.5,
          }}
        >
          Distance entre <strong>{pointALabel}</strong> et <strong>{pointBLabel}</strong>
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: 700,
            fontFamily: "monospace",
            letterSpacing: "0.02em",
          }}
        >
          {distance}
        </Typography>
      </Box>
    </Box>
  );
};
