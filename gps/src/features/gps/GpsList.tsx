"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExploreIcon from "@mui/icons-material/Explore";
import { GpsCard } from "@/components/GpsCard";
import { GpsRecord } from "@/types/gps";


interface GpsListProps {
  points: GpsRecord[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const GpsList = ({ points, onEdit, onDelete }: GpsListProps) => {
  if (points.length === 0) {
    return (
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          px: 3,
          borderRadius: 3,
          background: "linear-gradient(135deg, rgba(26, 54, 93, 0.03) 0%, rgba(237, 137, 54, 0.03) 100%)",
          border: "2px dashed",
          borderColor: "divider",
        }}
      >
        <ExploreIcon
          sx={{
            fontSize: 48,
            color: "text.primary",
            opacity: 0.5,
            mb: 2,
          }}
        />
        <Typography
          variant="h6"
          sx={{ color: "text.primary", fontWeight: 500, mb: 1 }}
        >
          Aucun point GPS enregistré
        </Typography>
        <Typography variant="body2" sx={{ color: "text.primary", opacity: 0.8 }}>
          Veuillez utiliser le formulaire au dessus pour ajouter votre premier point GPS
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
      {points.map((point) => (
        <GpsCard
          key={point.id}
          point={point}
          onEdit={onEdit ? () => onEdit(point.id) : undefined}
          onDelete={onDelete ? () => onDelete(point.id) : undefined}
        />
      ))}
    </Box>
  );
};
