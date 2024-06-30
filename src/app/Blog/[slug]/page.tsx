import UserPost from "@/components/userPost/UserPost";
import Image from "next/image";

type SinglePostPageProps = {
  params: {
    slug: string;
  };
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const getSinglePost = async (id: string): Promise<Post> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!response.ok) {
    throw new Error("There is something wrong");
  }

  return response.json();
};

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
  const { slug } = params;
  const post = await getSinglePost(slug);

  return (
    <div className="flex flex-col md:flex-row gap-[60px]">
      <div className="relative w-[100%] md:w-[250px] h-[200px] md:h-[450px]">
        <Image
          src="https://images.pexels.com/photos/14081998/pexels-photo-14081998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Main blog post image"
          fill
          className="object-cover"
        />
      </div>
      <div className="md:w-[300px lg:w-[500px]">
        <h2 className="text-4xl font-bold mb-5">{post.title}</h2>
        <div className="flex gap-7 items-center mb-10">
          <div className="relative w-[30px] h-[30px] rounded-full">
            <Image
              src="https://images.pexels.com/photos/14081998/pexels-photo-14081998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Author profile image"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <UserPost userId={post.userId} />
          <div>
            <p>Published</p>
            <h3 className="text-sm text-gray-500">01.01.2024</h3>
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-[13px] md:text-lg">
            {post.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
