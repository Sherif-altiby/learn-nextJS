import Link from "next/link"

const page = () => {
  return (
    <>
      <div className="text-center" >Article page</div>
      <div className="bg-slate-900 text-white w-fit cursor-pointer py-3 px-7 rounded-md mx-auto" >
        <Link href={"/posts"} > To Post Page </Link>
      </div>
    </>
  )
}

export default page