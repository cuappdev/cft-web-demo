"use client";

import CreatePostCell from "@/components/CreatePostCell";
import PostCell from "@/components/PostCell";
import { parsePosts } from "@/helper/Parse";
import { Post } from "@/types/Posts";
import { useEffect, useState } from "react";

export default function Home() {
  let endpoint = "https://chatdev-wuzwgwv35a-ue.a.run.app/api";
  
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${endpoint}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(parsePosts(data));
      });
  }, []);

  return (
    <div className="flex flex-col justify-center p-16 gap-4">
      <h1 className="text-2xl text-center">Posts</h1>
      <div className="grid grid-cols-3 gap-4">
        <CreatePostCell />
        {posts.map((post) => (
          <PostCell key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
