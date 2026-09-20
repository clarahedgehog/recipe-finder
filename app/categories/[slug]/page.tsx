import RecipeCard from "@/components/RecipeCard"
import SaveCategory from "@/components/SaveCategory"
import { RecipeType } from "@/types/types"

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  let recipes: RecipeType[] = []

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${slug}`)
    const data = await response.json()
    recipes = data.meals

  } catch (error) {
    console.log(error)
  }

  return (
    <div className="flex flex-col bg-[#FFF0D6]/70 rounded-2xllg:m-10 lg:mx-40">
      <h3 className="text-[#C46746] text-4xl my-10 font-sniglet">Here are {slug} recipes!</h3>
      <SaveCategory strCategory={slug} />
      <div className="flex flex-wrap">
        {recipes && recipes.map(recipe => <RecipeCard key={recipe.idMeal} {...recipe} />)}
      </div>
    </div>
  )
}

export default CategoryPage