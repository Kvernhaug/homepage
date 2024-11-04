"use client"
import { useRouter } from "next/navigation"

export function Navigation() {

  return (
    <div className="text-2xl w-full justify-center m-auto">
      <div className="flex flex-row gap-2 m-auto w-fit">
        <NavItem name="Home" dist="/"/>
        <NavItem name="About" />
        <NavItem name="My stuff" dist="myStuff"/>
        <NavItem name="My Links" dist="mylinks"/>
        <NavItem name="Options" dist="options"/>
      </div>
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
      className="text-orange-600 rounded-full p-2 m-2 hover:animate-bounce hover:animate-recoloring cursor-pointer"
    >
      {name}
    </a>
  )
}
