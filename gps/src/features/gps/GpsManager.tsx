"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useBDD } from "@/hooks/useBDD";
import { GpsWizard } from "./GpsWizard";
import { GpsList } from "./GpsList";
import { GpsEditDialog } from "./GpsEditDialog";
import { GpsRecord } from "@/types/gps";

const GPS_KEY = "gpsPoints";

export const GpsManager = () => {
  const { loadData, saveData } = useBDD<GpsRecord[]>(GPS_KEY);
  const [points, setPoints] = useState<GpsRecord[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    setPoints(loadData() || []);
  }, []);

  const handleSave = (newPoint: Omit<GpsRecord, "id">) => {
    const pointWithId = { ...newPoint, id: crypto.randomUUID() };
    const updatedPoints = [...points, pointWithId];
    setPoints(updatedPoints);
    saveData(updatedPoints);
  };

  const handleUpdate = (updatedPoint: GpsRecord) => {
    const updatedPoints = points.map((p) =>
      p.id === updatedPoint.id ? updatedPoint : p
    );
    setPoints(updatedPoints);
    saveData(updatedPoints);
  };

  const handleDelete = (id: string) => {
    const updatedPoints = points.filter((p) => p.id !== id);
    setPoints(updatedPoints);
    saveData(updatedPoints);
  };

  const editingPoint = points.find((p) => p.id === editId) || null;

  return (
    <>
      <GpsWizard onSave={handleSave} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Points GPS enregistrés
        </Typography>
        <GpsList points={points} onEdit={setEditId} onDelete={handleDelete} />
      </Box>
      <GpsEditDialog
        open={editId !== null}
        point={editingPoint}
        onClose={() => setEditId(null)}
        onSave={handleUpdate}
      />
    </>
  );
};
