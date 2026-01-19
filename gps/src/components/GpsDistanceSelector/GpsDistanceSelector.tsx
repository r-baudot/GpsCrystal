import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { GpsRecord } from "@/types/gps";

interface GpsDistanceSelectorProps {
  points: GpsRecord[];
  selectedPointA: string | null;
  selectedPointB: string | null;
  onSelectPointA: (id: string | null) => void;
  onSelectPointB: (id: string | null) => void;
}

export const GpsDistanceSelector = ({
  points,
  selectedPointA,
  selectedPointB,
  onSelectPointA,
  onSelectPointB,
}: GpsDistanceSelectorProps) => {
  const handleChangeA = (event: SelectChangeEvent) => {
    const value = event.target.value;
    onSelectPointA(value || null);
  };

  const handleChangeB = (event: SelectChangeEvent) => {
    const value = event.target.value;
    onSelectPointB(value || null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1, minWidth: 200 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "10px",
            background: "linear-gradient(135deg, #0084fd 0%, #00c6fd 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Typography sx={{ color: "white", fontWeight: 700, fontSize: "0.9rem" }}>A</Typography>
        </Box>
        <FormControl fullWidth>
          <InputLabel>Point de départ</InputLabel>
          <Select
            value={selectedPointA || ""}
            label="Point de départ"
            onChange={handleChangeA}
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="">
              <em>Sélectionner</em>
            </MenuItem>
            {points.map((point) => (
              <MenuItem
                key={point.id}
                value={point.id}
                disabled={point.id === selectedPointB}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PlaceIcon sx={{ fontSize: 18, color: "primary.main" }} />
                  {point.label}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <CompareArrowsIcon sx={{ color: "text.primary", display: { xs: "none", sm: "block" } }} />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1, minWidth: 200 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "10px",
            background: "linear-gradient(135deg, #00c6fd 0%, #0084fd 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Typography sx={{ color: "white", fontWeight: 700, fontSize: "0.9rem" }}>B</Typography>
        </Box>
        <FormControl fullWidth>
          <InputLabel>Point d'arrivée</InputLabel>
          <Select
            value={selectedPointB || ""}
            label="Point d'arrivée"
            onChange={handleChangeB}
            sx={{ bgcolor: "white" }}
          >
            <MenuItem value="">
              <em>Sélectionner</em>
            </MenuItem>
            {points.map((point) => (
              <MenuItem
                key={point.id}
                value={point.id}
                disabled={point.id === selectedPointA}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PlaceIcon sx={{ fontSize: 18, color: "secondary.main" }} />
                  {point.label}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
