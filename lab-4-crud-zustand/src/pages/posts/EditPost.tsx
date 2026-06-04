import { usePostStore } from "../../stores/post.store";
import { Link, useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useState } from "react";

const EditPost = () => {
  const editPost = usePostStore((state) => state.editPost);
  const { id } = useParams();
  const singlePost = usePostStore((state) =>
    state.posts.find((post) => post.id === id),
  );

  if (!id) return <div>Invalid ID</div>;

  if (!singlePost) return <div>Post not found...</div>;

  const [titleInput, setTitleInput] = useState<string>(`${singlePost.title}`);
  const [contentInput, setContentInput] = useState<string>(
    `${singlePost.content}`,
  );

  return (
    <div>
      <h1>Edit Post</h1>
      <form>
        <input type="text" value={titleInput} placeholder="" />
      </form>
      <p>Content: {singlePost.content}</p>
      <Link to={"/posts"}>Go back to posts list</Link>{" "}
      {/* <button onClick={() => editPost(id, title, content)}>Update</button> */}
    </div>
  );
};

export default EditPost;
