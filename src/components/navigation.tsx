"use client"
import { useRouter } from "next/navigation"

export function Navigation() {

  return (
    <div className="text-lg w-full justify-center bg-lime-200 m-auto">
      <div className="flex flex-row gap-2 m-auto w-fit">
        <NavItem name="Home" dist="/"/>
        <NavItem name="About" />
        <NavItem name="Funny stuff" />
        <NavItem name="My Links" dist="mylinks"/>
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
      className="bg-yellow-40 border-2 border red-500 text-red-500 hover:animate-bounce hover:animate-recoloring cursor-pointer"
    >
      {name}
    </a>
  )
}
