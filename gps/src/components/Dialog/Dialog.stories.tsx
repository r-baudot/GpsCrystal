import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import Typography from "@mui/material/Typography";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Confirmation: Story = {
  args: {
    open: true,
    title: "Supprimer le point GPS",
    onClose: () => console.log("Annuler"),
    onConfirm: () => console.log("Confirmer"),
    confirmLabel: "Supprimer",
    children: (
      <Typography>Êtes-vous sûr de vouloir supprimer ce point ?</Typography>
    ),
  },
};

export const Information: Story = {
  args: {
    open: true,
    title: "Information",
    onClose: () => console.log("Fermer"),
    children: (
      <Typography>
        Ce dialog affiche uniquement une information, sans action de
        confirmation.
      </Typography>
    ),
  },
};
