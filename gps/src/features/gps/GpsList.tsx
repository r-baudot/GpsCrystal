"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { GpsPoint } from "@/types/gps";

interface GpsListProps {
  points: GpsPoint[];
}

export const GpsList = ({ points }: GpsListProps) => {

  if (points.length === 0) {
    return <Typography>Aucun point GPS enregistré.</Typography>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {points.map((point, index) => (
        <Card key={index} variant="outlined">
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
      ))}
    </Box>
  );
};
