import { CategoryType } from "@/types/types"
import Link from "next/link"

const CategoryCard = ({ strCategory, strCategoryThumb }: CategoryType) => {
  return (
    <Link href={`/categories/${strCategory}`}>
      <img className="rounded-2xl" src={strCategoryThumb} alt={strCategory} />
      <h2 className="text-3xl text-[#583C1A] bg-[#FFF0D6]/70 lg:m-10 rounded-2xl p-5 font-sniglet">{strCategory}</h2>
    </Link>
  )
}

export default CategoryCard