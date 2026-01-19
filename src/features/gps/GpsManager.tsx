"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import StraightenIcon from "@mui/icons-material/Straighten";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useBDD } from "@/hooks/useBDD";
import { GpsWizard } from "./GpsWizard";
import { GpsList } from "./GpsList";
import { GpsEditDialog } from "./GpsEditDialog";
import { GpsDistanceCalculator } from "./GpsDistanceCalculator";
import { Snackbar, SnackbarSeverity } from "@/components/Snackbar";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { GpsRecord } from "@/types/gps";

const GPS_KEY = "gpsPoints";

interface SnackbarState {
  open: boolean;
  message: string;
  severity: SnackbarSeverity;
}

export const GpsManager = () => {
  const { loadData, saveData } = useBDD<GpsRecord[]>(GPS_KEY);
  const [points, setPoints] = useState<GpsRecord[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    setPoints(loadData() || []);
  }, []);

  const showSnackbar = (message: string, severity: SnackbarSeverity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSave = (newPoint: Omit<GpsRecord, "id">) => {
    const pointWithId = { ...newPoint, id: crypto.randomUUID() };
    const updatedPoints = [...points, pointWithId];
    setPoints(updatedPoints);
    saveData(updatedPoints);
    showSnackbar(`Point "${newPoint.label}" ajouté avec succès`);
  };

  const handleUpdate = (updatedPoint: GpsRecord) => {
    const updatedPoints = points.map((p) =>
      p.id === updatedPoint.id ? updatedPoint : p
    );
    setPoints(updatedPoints);
    saveData(updatedPoints);
    setEditId(null);
    showSnackbar(`Point "${updatedPoint.label}" modifié avec succès`);
  };

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
  };

  const handleDeleteConfirm = () => {
    if (!deleteId) return;
    const pointToDelete = points.find((p) => p.id === deleteId);
    const updatedPoints = points.filter((p) => p.id !== deleteId);
    setPoints(updatedPoints);
    saveData(updatedPoints);
    setDeleteId(null);
    if (pointToDelete) {
      showSnackbar(`Point "${pointToDelete.label}" supprimé`, "info");
    }
  };

  const editingPoint = points.find((p) => p.id === editId) || null;
  const deletingPoint = points.find((p) => p.id === deleteId) || null;

  return (
    <>
      {/* Section Hero avec fond bleu clair */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #e9f6ff 0%, #f0f9ff 100%)",
          py: { xs: 4, md: 6 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(0, 132, 253, 0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-10%",
            left: "10%",
            width: "250px",
            height: "250px",
            background: "radial-gradient(circle, rgba(0, 198, 253, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 },
              alignItems: { xs: "stretch", md: "center" },
            }}
          >
            {/* Texte à gauche */}
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <MyLocationIcon
                  sx={{
                    color: "primary.main",
                    fontSize: 40,
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    fontWeight: 800,
                  }}
                >
                  GPS Manager
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                }}
              >
                Gérez vos <strong>points GPS</strong> en toute simplicité.
                <br />
                <strong>Ajoutez</strong>, <strong>modifiez</strong> et <strong>calculez les distances</strong> entre vos coordonnées favorites.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
                    }}
                  />
                  <Typography sx={{ color: "text.primary", fontSize: { xs: "0.95rem", md: "1.05rem" } }}>
                    <strong>Ajout rapide</strong> en 3 étapes
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
                    }}
                  />
                  <Typography sx={{ color: "text.primary", fontSize: { xs: "0.95rem", md: "1.05rem" } }}>
                    <strong>Stockage local</strong> persistant
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
                    }}
                  />
                  <Typography sx={{ color: "text.primary", fontSize: { xs: "0.95rem", md: "1.05rem" } }}>
                    <strong>Calcul de distance</strong> précis (Km, m)
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Wizard à droite */}
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              <GpsWizard onSave={handleSave} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contenu principal */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 5 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "12px",
                background: "transparent",
                border: "2px solid #0084fd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ListIcon sx={{ color: "primary.main", fontSize: 28 }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Vos points GPS enregistrés
            </Typography>
            {points.length > 0 && (
              <Box
                sx={{
                  minWidth: 28,
                  height: 28,
                  borderRadius: "50%",
                  bgcolor: "#00c6fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  {points.length}
                </Typography>
              </Box>
            )}
          </Box>
          <GpsList points={points} onEdit={setEditId} onDelete={handleDeleteClick} />
        </Box>

      </Container>

      {/* Section Calculer une distance avec fond stylisé */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #e9f6ff 0%, #f0f9ff 100%)",
          py: { xs: 8, md: 10 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "20%",
            left: "5%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(0, 132, 253, 0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "180px",
            height: "180px",
            background: "radial-gradient(circle, rgba(0, 198, 253, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 5 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                minWidth: 48,
                borderRadius: "12px",
                background: "transparent",
                border: "2px solid #0084fd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <StraightenIcon sx={{ color: "primary.main", fontSize: 28 }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2.125rem" },
              }}
            >
              Calculer la distance entre deux de vos points GPS
            </Typography>
          </Box>

          <GpsDistanceCalculator points={points} />
        </Container>
      </Box>

      <GpsEditDialog
        open={editId !== null}
        point={editingPoint}
        onClose={() => setEditId(null)}
        onSave={handleUpdate}
      />

      <ConfirmDialog
        open={deleteId !== null}
        title="Supprimer ce point ?"
        message={
          deletingPoint
            ? `Voulez-vous vraiment supprimer le point "${deletingPoint.label}" ? Cette action est irréversible.`
            : ""
        }
        confirmLabel="Supprimer"
        cancelLabel="Annuler"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteId(null)}
      />

      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
      />
    </>
  );
};
