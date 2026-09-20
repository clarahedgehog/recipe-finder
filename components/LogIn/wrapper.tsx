"use client"

import { useUserContext } from "@/context/userContext"
import { UserContextType } from "@/types/types"
import LogIn from "."
import { ReactNode } from "react"
import Navigation from "../Navigation"

const LogInWrapper = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext() as UserContextType
  return (
    <div className="grow flex flex-col">
      {user ? <>
        <Navigation />
        <div className="lg:px-4 p-5 text-center flex flex-wrap justify-center">
          {children}
        </div>
      </>
        : <LogIn />}
    </div>
  )
}

export default LogInWrapper