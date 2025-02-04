"use client";
import { getTheme } from "@/utils/helpers";
import { useRouter, usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export function Navigation() {
  return (
    <NavigationMenu.Root className="flex flex-row text-2xl justify-center m-auto w-screen">
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
      className={`p-2 m-2 rounded-full hover:bg-season hover:text-white cursor-pointer ${
        isActive ? "bg-season text-white bg-opacity-30" : ""
      }`}
    >
      {name}
    </a>
  );
}
