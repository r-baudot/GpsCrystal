import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Point A</InputLabel>
        <Select
          value={selectedPointA || ""}
          label="Point A"
          onChange={handleChangeA}
        >
          <MenuItem value="">
            <em>Aucun</em>
          </MenuItem>
          {points.map((point) => (
            <MenuItem
              key={point.id}
              value={point.id}
              disabled={point.id === selectedPointB}
            >
              {point.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Point B</InputLabel>
        <Select
          value={selectedPointB || ""}
          label="Point B"
          onChange={handleChangeB}
        >
          <MenuItem value="">
            <em>Aucun</em>
          </MenuItem>
          {points.map((point) => (
            <MenuItem
              key={point.id}
              value={point.id}
              disabled={point.id === selectedPointA}
            >
              {point.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
