"use client";
import { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GpsDistanceSelector } from "@/components/GpsDistanceSelector";
import { GpsDistanceResult } from "@/components/GpsDistanceResult";
import { GpsRecord } from "@/types/gps";
import { calculateDistance, formatDistance } from "@/utils/gpsDistance";

interface GpsDistanceCalculatorProps {
  points: GpsRecord[];
}

export const GpsDistanceCalculator = ({
  points,
}: GpsDistanceCalculatorProps) => {
  const [selectedPointA, setSelectedPointA] = useState<string | null>(null);
  const [selectedPointB, setSelectedPointB] = useState<string | null>(null);

  const pointA = useMemo(
    () => points.find((p) => p.id === selectedPointA) || null,
    [points, selectedPointA]
  );

  const pointB = useMemo(
    () => points.find((p) => p.id === selectedPointB) || null,
    [points, selectedPointB]
  );

  const distance = useMemo(() => {
    if (!pointA || !pointB) return null;

    const distanceKm = calculateDistance(
      parseFloat(pointA.latitude),
      parseFloat(pointA.longitude),
      parseFloat(pointB.latitude),
      parseFloat(pointB.longitude)
    );

    return formatDistance(distanceKm);
  }, [pointA, pointB]);

  if (points.length < 2) {
    return (
      <Typography color="text.primary">
        Ajoutez au moins deux points GPS pour calculer la distance entre eux.
      </Typography>
    );
  }

  return (
    <Box>
      <GpsDistanceSelector
        points={points}
        selectedPointA={selectedPointA}
        selectedPointB={selectedPointB}
        onSelectPointA={setSelectedPointA}
        onSelectPointB={setSelectedPointB}
      />

      {distance && pointA && pointB && (
        <GpsDistanceResult
          pointALabel={pointA.label}
          pointBLabel={pointB.label}
          distance={distance}
        />
      )}
    </Box>
  );
};
