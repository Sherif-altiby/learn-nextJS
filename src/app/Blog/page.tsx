import BlogPost from "@/components/BlogPost/BlogPost";

type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const getPosts = async (): Promise<PostProps[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("There is something wrong");
  }

  return response.json();
};

const BlogPage = async () => {
  const posts: PostProps[] = await getPosts();

  return (
    <div className="flex gap-5 flex-wrap">
      {posts.map((post) => (
        <div className="w-[100%] sm:w-[45%] md:w-[30%] mb-5" key={post.id}>
          <BlogPost id={post.id} title={post.title} body={post.body} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
