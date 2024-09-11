"use client"
import { useRouter } from "next/navigation"

export function Navigation() {
  const router = useRouter()

  return (
    <div className="text-lg w-full justify-center">
      <div className="flex flex-row gap-2 mx-20">
        <a
          className="bg-yellow-400 border-2 border red-500 text-red-500 hover:animate-bounce hover:animate-recoloring"
        >
          Home
        </a>
        <a>About</a>
        <a>Fun stuff!</a>
      </div>
    </div>
  )
}
