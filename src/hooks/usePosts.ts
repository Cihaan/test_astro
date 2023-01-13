import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  link: string;
};

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([
    {
      body: "Astro is a static site generator for the modern web.",
      id: 1,
      link: "https://astro.build/",
      title: "Astro",
    },
    {
      body: "React is a JavaScript library for building user interfaces.",
      id: 2,
      link: "https://reactjs.org/",
      title: "React",
    },
    {
      body: "Vue is a progressive framework for building user interfaces.",
      id: 3,
      link: "https://vuejs.org/",
      title: "Vue",
    },
    {
      body: "Next is a React framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in SSR, CSS-in-JS, TypeScript support, smart bundling, route pre-fetching, and more. WASM",
      id: 4,
      link: "https://nextjs.org/",
      title: "Next",
    },
    {
      body: "Leptos is a Greek word meaning 'thin'. It is used to describe a person who is very thin. WASM",
      id: 5,
      link: "",
      title: "Leptos",
    },
  ]);

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
