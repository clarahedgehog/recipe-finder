"use client"

import { useUserContext } from "@/context/userContext"
import { RecipeType, UserContextType } from "@/types/types"

const SavedRecipe = ({ idMeal, strMealThumb, strMeal }: RecipeType) => {

  const { user, setUser } = useUserContext() as UserContextType

  const handleClick = () => {
    const recipe: RecipeType = { idMeal, strMeal, strMealThumb }
    const alreadySaved = user!.recipes.find(recipe => recipe.idMeal === idMeal) ? true : false
    console.log(alreadySaved)

    if (alreadySaved) {
      setUser({ ...user!, recipes: user!.recipes.filter(savedRecipe => savedRecipe.idMeal !== recipe.idMeal) })
    } else {
      setUser({ ...user!, recipes: [...user!.recipes, recipe] })
    }
  }

  return (
    <>
      <button onClick={handleClick} className="bg-[#FFD23C] text-[#583C1A] m-4 p-4 rounded-2xl cursor-pointer font-bold font-sniglet">{user && user.recipes.find(recipe => recipe.idMeal === idMeal) ? "Remove Recipe" : "Save Recipe"}
      </button>
      {user && user.recipes.map(recipe => <p key={recipe.idMeal}>{recipe.strMeal}</p>)}
    </>
  )
}

export default SavedRecipe