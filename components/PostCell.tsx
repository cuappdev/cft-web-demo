'use client'

import { Post } from "@/types/Posts";
import Image from "next/image";

interface PostCellProps {
  post: Post;
}

export default function PostCell(props: PostCellProps) {
  const { post } = props;

  return (
    <div className="p-6 flex flex-col gap-4 bg-gray-800">
      <div className="flex gap-4">
        <Image
          src="/aayush.jpeg"
          width="50"
          height="50"
          alt={"profile"}
          className="rounded-full"
        />
        <div>
          <h3>Anonymous</h3>
          <p>{post.time.toLocaleDateString()}</p>
        </div>
      </div>
      <p className="h-[68px] line-clamp-3">{post.message}</p>
      <div className="flex gap-4 items-center">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            console.log("Like button clicked");
          }}
        >
          Like
        </button>
        <p>{post.likes.length} likes</p>
      </div>
    </div>
  );
}
