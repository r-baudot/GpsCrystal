"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Dialog } from "@/components/Dialog";
import { GpsRecord, Gps } from "@/types/gps";
import { GPS_FORM_STEPS, isFormValid } from "./gpsFormConfig";

interface GpsEditDialogProps {
  open: boolean;
  point: GpsRecord | null;
  onClose: () => void;
  onSave: (point: GpsRecord) => void;
}

export const GpsEditDialog = ({
  open,
  point,
  onClose,
  onSave,
}: GpsEditDialogProps) => {
  const [formData, setFormData] = useState<Gps>({
    label: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    if (point) {
      setFormData(point);
    }
  }, [point]);

  const handleSave = () => {
    if (!point) return;
    onSave({ ...formData, id: point.id });
    onClose();
  };

  return (
    <Dialog
      open={open}
      title="Modifier le point GPS"
      onClose={onClose}
      onConfirm={handleSave}
      confirmLabel="Sauvegarder"
      confirmDisabled={!isFormValid(formData)}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
        {GPS_FORM_STEPS.slice(0, 2).map((step) => (
          <Box key={step.label}>{step.content(formData, setFormData)}</Box>
        ))}
      </Box>
    </Dialog>
  );
};
