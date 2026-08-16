"use client";

import { createContext, useContext, useEffect, useState, useRef, ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const defaultContext: ThemeContextType = {
  theme: "system",
  resolvedTheme: "dark",
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("echoverse-theme") as Theme | null;
      if (stored) return stored;
    }
    return "system";
  });
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) return;
    mountedRef.current = false;
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    let resolved: "light" | "dark" = "dark";

    if (theme === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      resolved = theme;
    }

    root.setAttribute("data-theme", resolved);
    localStorage.setItem("echoverse-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!mountedRef.current || theme !== "system") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const resolved = mediaQuery.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", resolved);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const value = { theme, resolvedTheme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}