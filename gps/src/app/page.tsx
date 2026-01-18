import { Wizard } from "@/components/wizard/Wizard";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box>
        <h1>Welcome to the GPS Application</h1>
        <br />
        <ul>
          1 - permettre la saisie de position GPS sous forme d'un wizard
          (formulaire à étape) :
        </ul>
        <li>- Etape 1 : Saisie du nom</li>
        <li>- Etape 2 : Saisie des coordonnées</li>
        <li>- Etape 3 : Récapitulatif avant </li>
        <p>TO DO : implémenter le wizard MUI (3 étapes) + setUp storyBook</p>
      </Box>
      <Wizard />
    </>
  );
}
