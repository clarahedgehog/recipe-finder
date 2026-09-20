"use client"

import { useUserContext } from "@/context/userContext"
import { UserContextType } from "@/types/types"

const SaveCategory = ({ strCategory }: { strCategory: string }) => {
  const { user, setUser } = useUserContext() as UserContextType

  const handleClick = () => {
    if (user && user.category !== strCategory)
      setUser({ ...user, category: strCategory })
    else if (user && user.category === strCategory)
      setUser({ ...user, category: "" })
  }

  return (
    <button className={`${user?.category === strCategory ? "bg-[#583C1A] text-[#FDEDCB]" : "bg-[#FFD23C] text-[#583C1A]"} m-4 p-4 rounded-2xl cursor-pointer w-fit self-center font-bold font-sniglet`} onClick={handleClick} > {user?.category === strCategory ? `Remove ${strCategory} as favorite` : `Set ${strCategory} as favorite`
    }</button>
  )
}

export default SaveCategory