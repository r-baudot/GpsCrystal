"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useBDD } from "@/hooks/useBDD";
import { GpsWizard } from "./GpsWizard";
import { GpsList } from "./GpsList";
import { GpsEditDialog } from "./GpsEditDialog";
import { GpsPoint } from "@/types/gps";

const GPS_KEY = "gpsPoints";

export const GpsManager = () => {
  const { getInitial, set } = useBDD<GpsPoint[]>(GPS_KEY);
  const [points, setPoints] = useState<GpsPoint[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    setPoints(getInitial() || []);
  }, []);

  const handleSave = (newPoint: GpsPoint) => {
    const updatedPoints = [...points, newPoint];
    setPoints(updatedPoints);
    set(updatedPoints);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
  };

  const handleUpdate = (updatedPoint: GpsPoint) => {
    if (editIndex === null) return;
    const updatedPoints = [...points];
    updatedPoints[editIndex] = updatedPoint;
    setPoints(updatedPoints);
    set(updatedPoints);
  };

  const handleCloseDialog = () => {
    setEditIndex(null);
  };

  return (
    <>
      <GpsWizard onSave={handleSave} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Points GPS enregistrés
        </Typography>
        <GpsList points={points} onEdit={handleEdit} />
      </Box>
      <GpsEditDialog
        open={editIndex !== null}
        point={editIndex !== null ? points[editIndex] : null}
        onClose={handleCloseDialog}
        onSave={handleUpdate}
      />
    </>
  );
};
