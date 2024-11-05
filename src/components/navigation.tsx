"use client"
import { useRouter } from "next/navigation"

export function Navigation() {

  return (
    <div className="flex flex-row text-2xl justify-around m-auto w-full">
      <NavItem name="Home" dist="/"/>
      <NavItem name="About" />
      <NavItem name="My stuff" dist="myStuff"/>
      <NavItem name="My Links" dist="mylinks"/>
      <NavItem name="Options" dist="options"/>
    </div>
  )
}

type NavItemsProps = {
  name: string
  dist?: string
}
function NavItem({ name, dist }: NavItemsProps) {

  const router = useRouter()
  function handleClick() { 
    router.push(dist??"")
   }

  return (
    <a
      onClick={handleClick}
      className="rounded-full p-2 m-2 hover:animate-bounce hover:animate-recoloring cursor-pointer"
    >
      {name}
    </a>
  )
}
