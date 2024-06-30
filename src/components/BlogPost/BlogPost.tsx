import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type BlogPostProps = {
  id: number;
  title: string;
  body: string;
};

const BlogPost: React.FC<BlogPostProps> = ({ id, title, body }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="relative w-[90%] h-[300px]">
          <Image
            src="https://images.pexels.com/photos/14081998/pexels-photo-14081998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blog-post-img"
            fill
            className="object-cover"
          />
        </div>
        <p className="rotate-90 text-sm text-gray-500">01.01.2024</p>
      </div>
      <div>
        <h2 className="text-2xl w-[90%] font-bold mt-2 mb-5">{title}</h2>
        <p className="text-sm text-gray-500 w-[90%] mb-3"> {body} </p>
        <Link href={`/Blog/${id}`} className="underline mt-3">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
