"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useBDD } from "@/hooks/useBDD";
import { GpsWizard } from "./GpsWizard";
import { GpsList } from "./GpsList";
import { GpsPoint } from "@/types/gps";

const GPS_KEY = "gpsPoints";

export const GpsManager = () => {
  const { getInitial, set } = useBDD<GpsPoint[]>(GPS_KEY);
  const [points, setPoints] = useState<GpsPoint[]>([]);

  useEffect(() => {
    setPoints(getInitial() || []);
  }, []);

  const handleSave = (newPoint: GpsPoint) => {
    const updatedPoints = [...points, newPoint];
    setPoints(updatedPoints);
    set(updatedPoints);
  };

  return (
    <>
      <GpsWizard onSave={handleSave} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Points GPS enregistrés
        </Typography>
        <GpsList points={points} />
      </Box>
    </>
  );
};
