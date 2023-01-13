type Post = {
  id: number;
  title: string;
  body: string;
  link: string;
};

type Props = {
  post: Post;
};

const Post = ({ post }: Props) => {
  return (
    <div
      className="flex flex-col items-center gap-2 border-2 border-gray-200 p-5 rounded-md
    "
    >
      <h2
        className="text-xl font-semibold
      "
      >
        {post.title}
      </h2>
      <p
        className="text-gray-500 text-sm text-center tracking-widest max-w-md
      "
      >
        {post.body}
      </p>
      <a
        className="text-blue-500
      "
        href={post.link}
      >
        {post.link ? "Visite website" : "No website yet"}
      </a>
    </div>
  );
};

export default Post;
