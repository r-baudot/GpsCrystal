import { GpsWizard } from "@/features/gps/GpsWizard";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box>
        <h1>Welcome to the GPS Application</h1>
        <br />
      </Box>
      <GpsWizard />
      <p>- permettre de lister les positions GPS enregistrées</p>
      <p>- permettre de mettre à jour une position GPS dans une popup </p>
      <p>- permettre de supprimer une position GPS</p>
      <p>- permettre de donner la distance entre deux positions GPS</p>
    </>
  );
}
