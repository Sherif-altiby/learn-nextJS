import PostDetailsComponet from "@/app/components/PostDetails";
import { Suspense } from "react";

const PostDetails = async ({ params }: { params: any }) => {
     
    await new Promise((resolve) => {
        setTimeout(() => { resolve() }, 2000)
    })

  const respons = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await respons.json();

  return (
    <div>
      <h1 className="text-center text-3xl my-10 bg-teal-900 text-white rounded-lg p-3"> Details Page </h1>
      <Suspense>
         <PostDetailsComponet title={post.title} body={post.body} />
      </Suspense> 
    </div>
  );
};

export default PostDetails;
