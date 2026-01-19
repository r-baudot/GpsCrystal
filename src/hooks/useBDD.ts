"use client";

export function useBDD<T>(key: string) {
  const loadData = (): T | null => {
    if (typeof window === "undefined") return null;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const saveData = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { loadData, saveData };
}
