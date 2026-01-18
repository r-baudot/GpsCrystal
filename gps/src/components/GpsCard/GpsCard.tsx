import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { GpsPoint } from "@/types/gps";

interface GpsCardProps {
  point: GpsPoint;
}

export const GpsCard = ({ point }: GpsCardProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{point.label}</Typography>
        <Typography color="text.secondary">
          Latitude : {point.latitude}
        </Typography>
        <Typography color="text.secondary">
          Longitude : {point.longitude}
        </Typography>
      </CardContent>
    </Card>
  );
};
