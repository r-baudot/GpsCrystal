import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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
    <Paper sx={{ p: 2, mt: 2 }} variant="outlined">
      <Typography variant="body1">
        Distance entre <strong>{pointALabel}</strong> et{" "}
        <strong>{pointBLabel}</strong> :
      </Typography>
      <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
        {distance}
      </Typography>
    </Paper>
  );
};
