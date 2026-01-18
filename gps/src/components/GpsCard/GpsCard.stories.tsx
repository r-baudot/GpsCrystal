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
      label: "Crystal",
      latitude: "48.8864",
      longitude: "2.3021",
    },
  },
};

export const Bali: Story = {
  args: {
    point: {
      label: "Bali",
      latitude: "-8.4095",
      longitude: "115.1889",
    },
  },
};
