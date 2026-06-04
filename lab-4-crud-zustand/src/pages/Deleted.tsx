import { usePostStore } from "../stores/post.store";
import toast from "react-hot-toast";
import { Link } from "react-router";

const Deleted = () => {
  const posts = usePostStore((state) => state.posts);
  const deletePermanently = usePostStore((state) => state.deletePermanently);
  const recoverPost = usePostStore((state) => state.recoverPost);
  const deletedPosts = posts.filter((post) => post.isDeleted === true);

  return (
    <div>
      <h1>Deleted posts</h1>
      {deletedPosts.length <= 0 ? (
        <h3>Trash is empty</h3>
      ) : (
        <ul>
          {deletedPosts.map((post) => (
            <li key={post.id}>
              {post.title} - {post.content}
              <button
                onClick={() => {
                  recoverPost(post.id);
                  toast.success("Successfully recovered");
                }}
              >
                Recover
              </button>
              <button
                onClick={() => {
                  deletePermanently(post.id);
                  toast.success("Post was successfully deleted");
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <Link to={"/posts"}>Go to posts list</Link>
    </div>
  );
};

export default Deleted;
