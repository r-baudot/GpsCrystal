import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmDialog } from "./ConfirmDialog";

const meta: Meta<typeof ConfirmDialog> = {
  title: "Components/ConfirmDialog",
  component: ConfirmDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

export const Default: Story = {
  args: {
    open: true,
    title: "Supprimer ce point ?",
    message:
      'Voulez-vous vraiment supprimer le point "Paris" ? Cette action est irréversible.',
    confirmLabel: "Supprimer",
    cancelLabel: "Annuler",
    onConfirm: () => console.log("Confirmé"),
    onCancel: () => console.log("Annulé"),
  },
};

export const CustomLabels: Story = {
  args: {
    open: true,
    title: "Confirmer l'action",
    message: "Êtes-vous sûr de vouloir continuer ?",
    confirmLabel: "Oui, continuer",
    cancelLabel: "Non, revenir",
    onConfirm: () => console.log("Confirmé"),
    onCancel: () => console.log("Annulé"),
  },
};
