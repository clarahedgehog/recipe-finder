import SavedRecipe from "@/components/SavedRecipe"
import { FullRecipeType } from "@/types/types"

const RecipePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`)
  const data = await response.json()

  const recipe: FullRecipeType = data.meals[0]

  const keys = Object.keys(recipe).filter(key => key.includes("strIngredient"))
  const keysWithValue = keys.filter(key => recipe[key as keyof FullRecipeType] !== "" && recipe[key as keyof FullRecipeType] !== null)

  const ingredients = keysWithValue.map((key, index) => `${recipe[key as keyof FullRecipeType]} - ${recipe[`strMeasure${index + 1}` as keyof FullRecipeType]}`)

  return (
    <div className="lg:w-200 mx-auto text-[#583C1A] lg:m-10 bg-[url(/bild.png)] bg-center bg-contain flex flex-col rounded-2xl">
      <div className="lg:px-40 py-10 flex flex-col">
        <h2 className="text-[#C46746] text-4xl mb-10 bg-[#FFF0D6]/70 w-fit rounded-2xl p-5 self-center font-sniglet">{recipe.strMeal}</h2>
        <div className="w-[80%] m-auto">
          <img className="w-full h-auto rounded-2xl" src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div className="bg-[#FFF0D6]/70 w-fit rounded-2xl p-5 self-center mt-5">
          <p className="my-4 text-3xl font-sniglet">This is a delicious {recipe.strCategory} from the oven of {recipe.strCountry}</p>
          {ingredients && ingredients.map((ingredient, index) => <p key={index}>{ingredient}</p>)}
          <h3 className="my-4 text-3xl font-sniglet">Instructions:</h3>
          <p>{recipe.strInstructions}</p>
          <SavedRecipe {...recipe} />
        </div>
      </div>
    </div>
  )
}

export default RecipePage