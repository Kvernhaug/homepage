"use client";
import { getTheme } from "@/utils/helpers";
import SnowEffect from "@/utils/snow";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

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
        <NavigationMenu.Root className="flex flex-row text-2xl justify-center m-auto w-screen">
            {theme === 'winter' && <SnowEffect />}
            <NavigationMenu.List className="flex">

                <NavigationMenu.Item>
                    <NavItem name="Home" dist="/" />
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavItem name="My stuff" dist="myStuff" />
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavItem name="My Links" dist="mylinks" />
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavItem name="Options" dist="options" />
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavItem name="About" dist="about" />
                </NavigationMenu.Item>

            </NavigationMenu.List>

        </NavigationMenu.Root>
    )
};

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
        className="text-white p-2 hover:animate-bounce hover:animate-recoloring cursor-pointer"
      >
        {name}
      </a>
    );
  }
