import { usePosts } from "../hooks/usePosts";
import { useRef, useState } from "react";
import Post from "./Post";
import Modal from "./Modal";

const Posts = () => {
  const [posts, setPosts] = usePosts();
  const [showModal, setShowModal] = useState(false);
  const title = useRef<HTMLInputElement>(null);
  const body = useRef<HTMLTextAreaElement>(null);
  const link = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center mt-5 gap-5">
      <h2 className="text-2xl text-green-500 font-semibold tracking-wid">
        Posts
      </h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md
      "
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add post
      </button>
      <div className="flex flex-col items-center">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>

      {showModal && (
        <Modal
          onValidate={() => {
            setShowModal(false);

            if (title.current && body.current && link.current) {
              setPosts([
                ...posts,
                {
                  id: posts.length + 1,
                  title: title.current.value,
                  body: body.current.value,
                  link: link.current.value,
                },
              ]);
            }

            if (title.current) {
              title.current.value = "";
            }

            if (body.current) {
              body.current.value = "";
            }

            if (link.current) {
              link.current.value = "";
            }
          }}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-2xl text-green-500 font-semibold tracking-wid">
              Add post
            </h2>
            <input
              className="border-2 border-green-500 px-4 py-2 rounded-md
          "
              ref={title}
              type="text"
              placeholder="Title"
            />
            <textarea
              className="border-2 border-green-500 px-4 py-2 rounded-md
          "
              ref={body}
              placeholder="Body"
            />

            <input
              className="border-2 border-green-500 px-4 py-2 rounded-md
          "
              ref={link}
              type="text"
              placeholder="Link"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Posts;
