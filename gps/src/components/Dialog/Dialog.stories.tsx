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

export const Default: Story = {
  args: {
    open: true,
    title: "Titre du dialog",
    onClose: () => {},
    onConfirm: () => {},
    children: <Typography>Contenu du dialog</Typography>,
  },
};

export const WithoutConfirm: Story = {
  args: {
    open: true,
    title: "Information",
    onClose: () => {},
    children: <Typography>Ce dialog n&apos;a pas de bouton de confirmation.</Typography>,
  },
};

export const CustomLabels: Story = {
  args: {
    open: true,
    title: "Supprimer l'élément",
    onClose: () => {},
    onConfirm: () => {},
    confirmLabel: "Supprimer",
    cancelLabel: "Non, garder",
    children: <Typography>Êtes-vous sûr de vouloir supprimer cet élément ?</Typography>,
  },
};

export const ConfirmDisabled: Story = {
  args: {
    open: true,
    title: "Formulaire incomplet",
    onClose: () => {},
    onConfirm: () => {},
    confirmDisabled: true,
    children: <Typography>Le bouton de confirmation est désactivé.</Typography>,
  },
};
