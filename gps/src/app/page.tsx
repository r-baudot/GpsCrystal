import { GpsManager } from "@/features/gps/GpsManager";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box>
        <h1>Welcome to the GPS Application</h1>
        <br />
      </Box>
      <GpsManager />
      <p>- permettre de supprimer une position GPS</p>
      <p>- permettre de donner la distance entre deux positions GPS</p>
    </>
  );
}
