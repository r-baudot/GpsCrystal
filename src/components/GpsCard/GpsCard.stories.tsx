import type { Meta, StoryObj } from "@storybook/react";
import { GpsCard } from "./GpsCard";

const meta: Meta<typeof GpsCard> = {
  title: "Components/GpsCard",
  component: GpsCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GpsCard>;

export const Crystal: Story = {
  args: {
    point: {
      id: "1",
      label: "Crystal",
      latitude: "48.8864",
      longitude: "2.3021",
    },
  },
};

export const AvecBoutons: Story = {
  args: {
    point: {
      id: "2",
      label: "Tour Eiffel",
      latitude: "48.8584",
      longitude: "2.2945",
    },
    onEdit: () => console.log("Modifier cliqué"),
    onDelete: () => console.log("Supprimer cliqué"),
  },
};
