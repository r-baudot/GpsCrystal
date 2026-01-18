import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useBDD } from "./useBDD";

describe("useBDD", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe("loadData", () => {
    it("retourne null quand aucune donnée n'existe", () => {
      const { result } = renderHook(() => useBDD<string>("testKey"));
      expect(result.current.loadData()).toBeNull();
    });

    it("retourne les données parsées quand elles existent", () => {
      localStorage.setItem("testKey", JSON.stringify({ name: "test" }));
      const { result } = renderHook(() => useBDD<{ name: string }>("testKey"));
      expect(result.current.loadData()).toEqual({ name: "test" });
    });

    it("retourne les données d'un tableau", () => {
      const testData = [
        { id: "1", label: "Point 1" },
        { id: "2", label: "Point 2" },
      ];
      localStorage.setItem("gpsPoints", JSON.stringify(testData));
      const { result } = renderHook(() => useBDD<typeof testData>("gpsPoints"));
      expect(result.current.loadData()).toEqual(testData);
    });
  });

  describe("saveData", () => {
    it("sauvegarde les données dans localStorage", () => {
      const { result } = renderHook(() => useBDD<{ name: string }>("testKey"));
      result.current.saveData({ name: "saved" });
      expect(localStorage.getItem("testKey")).toBe(
        JSON.stringify({ name: "saved" }),
      );
    });

    it("écrase les données existantes", () => {
      localStorage.setItem("testKey", JSON.stringify({ name: "old" }));
      const { result } = renderHook(() => useBDD<{ name: string }>("testKey"));
      result.current.saveData({ name: "new" });
      expect(result.current.loadData()).toEqual({ name: "new" });
    });

    it("sauvegarde les données d'un tableau", () => {
      const { result } = renderHook(() =>
        useBDD<{ id: string }[]>("gpsPoints"),
      );
      const testData = [{ id: "1" }, { id: "2" }];
      result.current.saveData(testData);
      expect(result.current.loadData()).toEqual(testData);
    });
  });
});
