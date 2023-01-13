import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  link: string;
};

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const posts = localStorage.getItem("posts");

    if (posts) {
      setPosts(JSON.parse(posts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return [posts, setPosts];
}
