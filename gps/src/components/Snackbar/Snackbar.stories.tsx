import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar } from "./Snackbar";

const meta: Meta<typeof Snackbar> = {
  title: "Components/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Success: Story = {
  args: {
    open: true,
    message: 'Point "Paris" ajouté avec succès',
    severity: "success",
    onClose: () => console.log("Fermé"),
  },
};

export const Error: Story = {
  args: {
    open: true,
    message: "Une erreur est survenue",
    severity: "error",
    onClose: () => console.log("Fermé"),
  },
};

export const Info: Story = {
  args: {
    open: true,
    message: 'Point "Paris" supprimé',
    severity: "info",
    onClose: () => console.log("Fermé"),
  },
};

export const Warning: Story = {
  args: {
    open: true,
    message: "Attention, cette action est irréversible",
    severity: "warning",
    onClose: () => console.log("Fermé"),
  },
};
