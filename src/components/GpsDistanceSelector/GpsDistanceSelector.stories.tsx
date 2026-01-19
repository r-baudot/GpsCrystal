import type { Meta, StoryObj } from "@storybook/react";
import { GpsDistanceSelector } from "./GpsDistanceSelector";

const mockPoints = [
  { id: "1", label: "Crystal", latitude: "48.8864", longitude: "2.3021" },
  { id: "2", label: "Bali", latitude: "-8.4095", longitude: "115.1889" },
  { id: "3", label: "New York", latitude: "40.7128", longitude: "-74.0060" },
];

const meta: Meta<typeof GpsDistanceSelector> = {
  title: "Components/GpsDistanceSelector",
  component: GpsDistanceSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GpsDistanceSelector>;

export const Default: Story = {
  args: {
    points: mockPoints,
    selectedPointA: null,
    selectedPointB: null,
    onSelectPointA: () => {},
    onSelectPointB: () => {},
  },
};

export const WithSelectionA: Story = {
  args: {
    points: mockPoints,
    selectedPointA: "1",
    selectedPointB: null,
    onSelectPointA: () => {},
    onSelectPointB: () => {},
  },
};

export const BothSelected: Story = {
  args: {
    points: mockPoints,
    selectedPointA: "1",
    selectedPointB: "2",
    onSelectPointA: () => {},
    onSelectPointB: () => {},
  },
};
