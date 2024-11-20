"use client";
import { getTheme } from "@/utils/helpers";
import SnowEffect from "@/utils/snow";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Navigation() {
  const [theme, setTheme] = useState<string | null>(getTheme());

  // Update theme state when the theme changes
  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = getTheme();
      setTheme(currentTheme);
    };

    // Listen for theme changes
    window.addEventListener('themeChange', updateTheme);

    // Cleanup event listener
    return () => window.removeEventListener('themeChange', updateTheme);
  }, []);

  return (
    <div className="flex flex-row text-2xl justify-around m-auto w-full">
      {theme === 'winter' && <SnowEffect />}
      <NavItem name="Home" dist="/" />
      <NavItem name="My stuff" dist="myStuff" />
      <NavItem name="My Links" dist="mylinks" />
      <NavItem name="Options" dist="options" />
      <NavItem name="About" dist="about" />
    </div>
  );
}

type NavItemsProps = {
  name: string;
  dist?: string;
};
function NavItem({ name, dist }: NavItemsProps) {
  const router = useRouter();
  function handleClick() {
    router.push(dist ?? "");
  }
  const theme = getTheme();

  return (
    <a
      onClick={handleClick}
      className="text-season rounded-full p-2 m-2 hover:animate-bounce hover:animate-recoloring cursor-pointer"
    >
      {name}
    </a>
  );
}
