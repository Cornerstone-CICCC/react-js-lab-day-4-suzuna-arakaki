import { usePostStore } from "../../stores/post.store";
import { useParams } from "react-router";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const PostDetail = () => {
  const deletePost = usePostStore((state) => state.deletePost);
  const { id } = useParams();
  const singlePost = usePostStore((state) =>
    state.posts.find((post) => post.id === id),
  ); // This is an object that including title and content
  const navigate = useNavigate();

  if (!id) return <div>Invalid ID</div>;

  if (!singlePost) return <div>Post not found...</div>;

  const handleDeletePost = () => {
    deletePost(id);
    toast.success("Moved to trash.");

    navigate("/posts");
  };

  return (
    <div>
      <h1>Post Detail</h1>
      <h3>Title: {singlePost.title}</h3>
      <p>Content: {singlePost.content}</p>
      <button onClick={handleDeletePost}>Delete</button>{" "}
      <Link to={`/posts/:${id}/edit`}>Edit</Link>{" "}
      <Link to={"/posts"}>Go back to posts list</Link>
    </div>
  );
};

export default PostDetail;
