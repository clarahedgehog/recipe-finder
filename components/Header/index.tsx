"use client"

import { useUserContext } from "@/context/userContext"
import { UserContextType } from "@/types/types"

const Header = () => {
  const { user } = useUserContext() as UserContextType
  return (
    <header className="bg-[#FFD23C] p-2 flex justify-evenly items-center">
      <img src="/logo.png" height={150} width={150} />
    </header>
  )
}

export default Header