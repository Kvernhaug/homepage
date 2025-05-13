"use client";
import { getTheme } from "@/utils/helpers";
import { useRouter, usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { DropdownMenu } from "radix-ui";
import {
	HamburgerMenuIcon,
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width to toggle menu type
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavigationMenu.Root className={`flex flex-row text-2xl ${isMobile ? 'justify-end' : 'justify-center'} m-auto w-screen`}>
      {
        isMobile? (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <button className="">
                <HamburgerMenuIcon />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="min-w-[200px] bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 mr-4">
                <DropdownMenu.Item>
                  <DropdownItem name="Home" dist="/" />
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <DropdownItem name="My stuff" dist="myStuff" />
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <DropdownItem name="My Links" dist="mylinks" />
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <DropdownItem name="About" dist="about" />
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        ) : (
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
        )
      }
    </NavigationMenu.Root>
  );
}

function MobileDropdown() {
  const router = useRouter();
  const pathName = usePathname();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(event.target.value);
  };

  const navItems = [
    { name: "Home", dist: "/" },
    { name: "My stuff", dist: "myStuff" },
    { name: "My Links", dist: "mylinks" },
    { name: "Options", dist: "options" },
    { name: "About", dist: "about" },
  ];

  return (
    <select
      onChange={handleChange}
      value={pathName}
      className="p-2 m-2 rounded-full bg-season text-dark cursor-pointer"
    >
      {navItems.map((item) => (
        <option key={item.dist} value={item.dist}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

type NavItemsProps = {
  name: string;
  dist?: string;
};
function NavItem({ name, dist }: NavItemsProps) {
  const router = useRouter();
  const pathName = usePathname();
  const isActive = pathName === '/' + dist;
  function handleClick() {
    router.push(dist ?? "");
  }
  const theme = getTheme();

  return (
    <a
      onClick={handleClick}
      className={`p-2 m-2 rounded-full hover:bg-season hover:text-dark cursor-pointer ${
        isActive ? "bg-season text-dark" : "" // Styling for active navigation link
      }`}
    >
      {name}
    </a>
  );
}

function DropdownItem({ name, dist }: NavItemsProps) {
  const router = useRouter();
  const pathName = usePathname();
  const isActive = pathName === '/' + dist;
  function handleClick() {
    router.push(dist ?? "");
  }

  return (
    <a
      onClick={handleClick}
      className=""
    >
      {name}
    </a>
  );
}
