"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GpsCard } from "@/components/GpsCard";
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
        <GpsCard key={index} point={point} />
      ))}
    </Box>
  );
};
