import { useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Astro",
      body: "Astro is a static site generator for the modern web.",
      link: "https://astro.build/",
    },
    {
      id: 2,
      title: "React",
      body: "React is a JavaScript library for building user interfaces.",
      link: "https://reactjs.org/",
    },
    {
      id: 3,
      title: "Vue",
      body: "Vue is a progressive framework for building user interfaces.",
      link: "https://vuejs.org/",
    },
    {
      id: 4,
      title: "Next",
      body: "Next is a React framework for production. It makes building fullstack React apps and sites a breeze and ships with built-in SSR, CSS-in-JS, TypeScript support, smart bundling, route pre-fetching, and more. WASM",
      link: "https://nextjs.org/",
    },
    {
      id: 5,
      title: "Leptos",
      body: "Leptos is a Greek word meaning 'thin'. It is used to describe a person who is very thin. WASM",
      link: "",
    },
  ]);

  return (
    <div className="flex flex-col items-center mt-5 gap-5">
      <h2 className="text-2xl text-green-500 font-semibold tracking-wid">
        Posts
      </h2>
      <div className="flex flex-col items-center">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
