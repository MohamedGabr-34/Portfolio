import { useEffect, useState } from "react";
import type { Theme } from "../types/theme";

export const useTheme = (initialValue: Theme = "dark") => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) ?? initialValue;
  });

  // Effect — apply class to <html> + save whenever theme changes
  useEffect(() => {
    document.documentElement.className = `theme-${theme}`;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const applyTheme = (value: Theme) => {
    setTheme(value);
  };

  return { theme, applyTheme };
};

