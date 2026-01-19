import { describe, it, expect } from "vitest";
import { calculateDistance, formatDistance } from "./gpsDistance";

describe("calculateDistance", () => {
  it("retourne 0 pour des coordonnées identiques", () => {
    const distance = calculateDistance(48.8864, 2.3021, 48.8864, 2.3021);
    expect(distance).toBe(0);
  });

  it("calcule la distance entre Crystal et la Tour Eiffel (~2.5km)", () => {
    const distance = calculateDistance(48.8864, 2.3021, 48.8584, 2.2945);
    expect(distance).toBeGreaterThan(2);
    expect(distance).toBeLessThan(4);
  });

  it("calcule la distance entre Paris et Bali (~11800km)", () => {
    const distance = calculateDistance(48.8864, 2.3021, -8.4095, 115.1889);
    expect(distance).toBeGreaterThan(11000);
    expect(distance).toBeLessThan(12500);
  });

  it("gère les coordonnées négatives", () => {
    const distance = calculateDistance(-33.8688, 151.2093, -8.4095, 115.1889);
    expect(distance).toBeGreaterThan(4000);
    expect(distance).toBeLessThan(5000);
  });
});

describe("formatDistance", () => {
  it("formate en mètres quand la distance est inférieure à 1km", () => {
    expect(formatDistance(0.5)).toBe("500 m");
    expect(formatDistance(0.123)).toBe("123 m");
    expect(formatDistance(0.999)).toBe("999 m");
  });

  it("formate en kilomètres quand la distance est supérieure ou égale à 1km", () => {
    expect(formatDistance(1)).toBe("1.00 km");
    expect(formatDistance(2.5)).toBe("2.50 km");
    expect(formatDistance(11823.42)).toBe("11823.42 km");
  });

  it("arrondit les mètres à l'entier le plus proche", () => {
    expect(formatDistance(0.3456)).toBe("346 m");
  });
});
