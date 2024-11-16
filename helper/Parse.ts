import { Post } from "@/types/Posts";

export function parsePosts(json: any): Post[] {
  return json.map((post: any) => {
    return {
      id: post.id,
      message: post.message,
      time: new Date(post.time),
      likes: post.likes
    };
  }).sort((a: Post, b: Post) => {
    return b.time.getTime() - a.time.getTime();
  });
}