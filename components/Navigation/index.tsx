import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="bg-[#583C1A] text-[#FDEDCB] p-4 text-center">
      <div className="max-w-md flex justify-between m-auto uppercase">
        <Link className="border border-[#FDEDCB] p-2 rounded-2xl" href="/">Home</Link>
        <Link className="border border-[#FDEDCB] p-2 rounded-2xl" href="/categories">Categories</Link>
        <Link className="border border-[#FDEDCB] p-2 rounded-2xl" href="/profile">Profile</Link>
      </div>
    </nav>
  )
}

export default Navigation