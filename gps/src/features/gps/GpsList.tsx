"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GpsCard } from "@/components/GpsCard";
import { GpsRecord } from "@/types/gps";

interface GpsListProps {
  points: GpsRecord[];
  onEdit?: (id: string) => void;
}

export const GpsList = ({ points, onEdit }: GpsListProps) => {
  if (points.length === 0) {
    return <Typography>Aucun point GPS enregistré.</Typography>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {points.map((point) => (
        <GpsCard
          key={point.id}
          point={point}
          onEdit={onEdit ? () => onEdit(point.id) : undefined}
        />
      ))}
    </Box>
  );
};
