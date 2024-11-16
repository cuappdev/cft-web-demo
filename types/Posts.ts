export type Post = {
  id: string;
  message: string;
  likes: string[];
  time: Date;
}

let posts: Post[] = [
  {
    id: "1",
    message: "Hello, World!",
    likes: ["1"],
    time: new Date()
  },
  {
    id: "2",
    message: "Hello, Two!",
    likes: ["1", "2", "2"],
    time: new Date()
  },
  {
    id: "3",
    message: "Bye, world! I love everyone! Bye, world! I love everyone! Bye, world! I love everyone! Bye, world! I love everyone! Bye, world! I love everyone! Bye, world! I love everyone!",
    likes: ["4", "3"],
    time: new Date()
  },
]

export { posts };