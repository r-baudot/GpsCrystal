import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PublicIcon from "@mui/icons-material/Public";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GpsRecord } from "@/types/gps";

interface GpsCardProps {
  point: GpsRecord;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const GpsCard = ({ point, onEdit, onDelete }: GpsCardProps) => (
  <Card
    sx={{
      overflow: "visible",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 12px 24px rgba(0, 132, 253, 0.2)",
      },
      // Conteneur globe + anneaux qui grandit et monte ensemble
      "&:hover .globe-container": {
        transform: "scale(1.2) translateY(-4px)",
      },
      // Anneaux qui tournent (à l'intérieur du conteneur)
      "&:hover .orbit-spin-1": {
        animation: "spin 3s linear infinite",
      },
      "&:hover .orbit-spin-2": {
        animation: "spin 4s linear infinite reverse",
      },
      // Ripples colorés
      "&:hover .ripple-1": {
        animation: "ripple-once 0.35s ease-out forwards",
      },
      "&:hover .ripple-2": {
        animation: "ripple-once 0.35s ease-out 0.08s forwards",
      },
      // Texte qui grossit
      "&:hover .card-title": {
        transform: "scale(1.05)",
      },
      // Coordonnées en bleu
      "&:hover .card-coords": {
        color: "primary.main",
      },
      "@keyframes spin": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      "@keyframes ripple-once": {
        "0%": {
          transform: "scale(1)",
          opacity: 0.7,
        },
        "100%": {
          transform: "scale(2.2)",
          opacity: 0,
        },
      },
    }}
  >
    <CardContent sx={{ pb: onEdit || onDelete ? 1 : 2, pt: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Conteneur globe + anneaux + ripples (tout se déplace ensemble) */}
        <Box
          className="globe-container"
          sx={{
            position: "relative",
            mb: 2,
            width: 96,
            height: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease",
          }}
        >
          {/* Ripples colorés */}
          <Box
            className="ripple-1"
            sx={{
              position: "absolute",
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "3px solid #0084fd",
              opacity: 0,
            }}
          />
          <Box
            className="ripple-2"
            sx={{
              position: "absolute",
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "2px solid #00c6fd",
              opacity: 0,
            }}
          />
          {/* Anneau orbital 1 - tourne */}
          <Box
            className="orbit-spin-1"
            sx={{
              position: "absolute",
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: "2px solid transparent",
              borderTopColor: "rgba(0, 132, 253, 0.4)",
              borderRightColor: "rgba(0, 132, 253, 0.2)",
            }}
          />
          {/* Anneau orbital 2 - tourne inversé */}
          <Box
            className="orbit-spin-2"
            sx={{
              position: "absolute",
              width: 96,
              height: 96,
              borderRadius: "50%",
              border: "1px dashed transparent",
              borderTopColor: "rgba(0, 198, 253, 0.3)",
              borderLeftColor: "rgba(0, 198, 253, 0.15)",
            }}
          />
          {/* Globe principal */}
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 50%, #4ade80 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              boxShadow: "0 4px 14px rgba(0, 132, 253, 0.3)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 4,
                borderRadius: "50%",
                border: "1px dashed rgba(255,255,255,0.4)",
              }}
            />
            <PublicIcon sx={{ color: "white", fontSize: 32 }} />
          </Box>
        </Box>
        <Typography
          variant="h5"
          className="card-title"
          sx={{
            fontWeight: 700,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "100%",
            mb: 2,
            transition: "transform 0.3s ease",
          }}
        >
          {point.label}
        </Typography>
        <Box
          className="card-coords"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
            transition: "color 0.3s ease",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 500 }}>
              Latitude
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "monospace", fontWeight: 600, color: "primary.main" }}>
              {point.latitude}°
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 500 }}>
              Longitude
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "monospace", fontWeight: 600, color: "secondary.main" }}>
              {point.longitude}°
            </Typography>
          </Box>
        </Box>
      </Box>
    </CardContent>
    {(onEdit || onDelete) && (
      <CardActions sx={{ justifyContent: "center", pt: 0, px: 2, pb: 1.5 }}>
        {onEdit && (
          <Tooltip title="Modifier" slotProps={{ popper: { modifiers: [{ name: "offset", options: { offset: [0, -8] } }] } }}>
            <IconButton
              size="small"
              onClick={onEdit}
              sx={{
                color: "primary.main",
                "&:hover": { bgcolor: "primary.main", color: "white" },
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        {onDelete && (
          <Tooltip title="Supprimer" slotProps={{ popper: { modifiers: [{ name: "offset", options: { offset: [0, -8] } }] } }}>
            <IconButton
              size="small"
              onClick={onDelete}
              sx={{
                color: "error.main",
                "&:hover": { bgcolor: "error.main", color: "white" },
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    )}
  </Card>
);
