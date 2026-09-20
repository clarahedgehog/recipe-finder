import CategoryCard from "@/components/CategoryCard"
import { CategoryType } from "@/types/types"

const CategoriesPage = async () => {

  let categories: CategoryType[] = []

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}categories.php`)
    const data = await response.json()
    categories = data.categories

  } catch (error) {
    console.log(error)
  }

  return (
    <div className="rounded-2xl lg:m-10 lg:mx-40 bg-[url(/bild.png)] bg-center bg-contain flex flex-col lg:px-40 items-center">
      <h2 className="text-[#C46746] text-4xl my-10 bg-[#FFF0D6]/70 w-fit rounded-2xl p-5 font-sniglet">Categories Page</h2>
      <div className="flex flex-wrap justify-center gap-5 mb-10">
        {categories && categories.map(category => <CategoryCard key={category.idCategory} {...category} />)}
      </div>
    </div>
  )
}

export default CategoriesPage