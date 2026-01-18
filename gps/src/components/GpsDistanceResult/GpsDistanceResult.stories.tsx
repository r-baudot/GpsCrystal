import type { Meta, StoryObj } from "@storybook/react";
import { GpsDistanceResult } from "./GpsDistanceResult";

const meta: Meta<typeof GpsDistanceResult> = {
  title: "Components/GpsDistanceResult",
  component: GpsDistanceResult,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GpsDistanceResult>;

export const ShortDistance: Story = {
  args: {
    pointALabel: "Bureau",
    pointBLabel: "Café",
    distance: "350 m",
  },
};

export const MediumDistance: Story = {
  args: {
    pointALabel: "Crystal",
    pointBLabel: "Tour Eiffel",
    distance: "2.45 km",
  },
};

export const LongDistance: Story = {
  args: {
    pointALabel: "Crystal",
    pointBLabel: "Bali",
    distance: "11 823.42 km",
  },
};
