import { RecipeType } from "@/types/types"
import Link from "next/link"

const RecipeCard = ({ idMeal, strMeal, strMealThumb }: RecipeType) => {
  return (
    <Link className="max-w-md mx-auto flex flex-col items-center font-sniglet" href={`/recipes/${idMeal}`}>
      <div className="w-[80%] m-auto">
        <img className="w-full h-auto rounded-2xl" src={strMealThumb} alt={strMeal} />
      </div>
      <h3 className="mb-10 mt-5 text-3xl text-[#583C1A] bg-[#FFF0D6]/70 rounded-2xl w-fit p-5">{strMeal}</h3>
    </Link>
  )
}

export default RecipeCard