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
    </>
  );
}
