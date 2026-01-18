"use client";

export function useBDD<T>(key: string) {
  const getInitial = (): T | null => {
    if (typeof window === "undefined") return null;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const set = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = () => {
    localStorage.removeItem(key);
  };

  return { getInitial, set, remove };
}
