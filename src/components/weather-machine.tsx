"use client";
import { getTheme } from "@/utils/helpers";
import SnowEffect from "@/utils/snow";
import { useEffect, useState } from "react";

export function WeatherMachine() {
  const [theme, setTheme] = useState<string | null>(getTheme());

  // Update theme state when the theme changes
  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = getTheme();
      setTheme(currentTheme);
    };

    // Listen for theme changes
    window.addEventListener("themeChange", updateTheme);

    // Cleanup event listener
    return () => window.removeEventListener("themeChange", updateTheme);
  }, []);

  return <div>{theme === "winter" && <SnowEffect />}</div>;
}
