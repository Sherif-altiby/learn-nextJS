import Link from "next/link";
import Todo from "../components/Todo";

export const metadata = {
  title: "Posts Page",
};

const page = async () => {

 

  const result = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await result.json();

  const postsJSX = posts.map(
    (post: { userID: number; id: number; title: string; body: string }) => {
      return (
        <Link href={`/posts/${post.id}`}>
          <div className="my-8 border-2 p-5 rounded-lg bg-teal-500 cursor-pointer">
            <h1 className="text-red-950 font-bold text-xl"> {post.title} </h1>
            <p> {post.body} </p>
          </div>
        </Link>
      );
    }
  );

  return (
    <div>
      <h1 className="text-center text-5xl mt-5"> Posts Pages </h1>
      <div className="text-center">{postsJSX}</div>
      {/* <Todo /> */}
    </div>
  );
};

export default page;
