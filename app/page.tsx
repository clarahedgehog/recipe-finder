"use client"

import RecipeCard from "@/components/RecipeCard"
import { useUserContext } from "@/context/userContext"
import { RecipeType, UserContextType } from "@/types/types"
import { useEffect, useState } from "react"

export default function Home() {

  const { user } = useUserContext() as UserContextType
  const [recipe, setRecipe] = useState<RecipeType | null>(null)

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}random.php`)
      const data = await response.json()
      if (data) setRecipe(data.meals[0])
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCategoryMeal = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${user!.category}`)
      const data = await response.json()
      if (data) setRecipe(data.meals[Math.floor(Math.random() * data.meals.length)])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!user!.category)
      fetchRandomMeal()
    else
      fetchCategoryMeal()
  }, [])

  return (
    <div className="lg:m-10 rounded-2xl bg-[url(/bild.png)] bg-center bg-contain flex flex-col lg:px-40">
      {user && <p className="text-[#C46746] text-4xl my-10 bg-[#FFF0D6]/70 w-fit rounded-2xl p-5 font-sniglet">Hi {user.username}! <br></br> Welcome to our website!</p>}
      {recipe && <RecipeCard {...recipe} />}
    </div>
  );
}
