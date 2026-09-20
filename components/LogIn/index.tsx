"use client"

import { SetStateAction, useState } from "react"
import { users } from "@/data/users"
import { useUserContext } from "@/context/userContext"
import { UserContextType } from "@/types/types"

const LogIn = () => {

  const { setUser } = useUserContext() as UserContextType

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleUsername = (e: { target: { value: SetStateAction<string> } }) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value)
  }

  const handleLogIn = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const loggedInUser = users.find(item => item.username === username && item.password === password)
    setUser(loggedInUser!)
  }

  return (
    <div className="flex flex-col-reverse lg:flex-col lg:p-25 p-5 bg-[url(/hero.jpg)] bg-cover bg-center h-auto justify-center w-full" >
      <h1 className="font-sniglet text-[#FDEDCB] lg:text-8xl invisible lg:visible text-6xl text-center lg:pb-8 p-9 font-bold text-shadow-taupe-700 text-shadow-2xs ">
        Sunny Mood <br></br>
        Golden Food
      </h1>
      <form className="p-8 max-w-md rounded-2xl mx-auto my-4 text-[#FDEDCB] bg-[#583C1A]/80 w-full">
        <h2 className="text-center text-4xl pb-4 font-sniglet">Log In</h2>
        <label className="field font-sniglet" htmlFor="username">Enter your username</label>
        <input className="field" id="username" placeholder="Enter username" onChange={handleUsername} value={username} />
        <label className="field font-sniglet" htmlFor="password">Enter your password</label>
        <input className="field" type="password" id="password" placeholder="Enter password" onChange={handlePassword} value={password} />
        <button onClick={handleLogIn} className="bg-[#FFD23C] text-[#583C1A] text-2xl mt-4 p-2 rounded w-full hover:bg-[#FDEDCB] cursor-pointer font-sniglet">Log In</button>
      </form>
    </div>
  )
}

export default LogIn