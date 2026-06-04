import { usePostStore } from "../../stores/post.store";
import toast from "react-hot-toast";
import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const AddPost = () => {
  const addPost = usePostStore((state) => state.addPost);
  const [titleInput, setTitleInput] = useState<string>("");
  const [contentInput, setContentInput] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost(titleInput, contentInput);
    setTitleInput("");
    setContentInput("");
    toast.success("Succesefully added");

    navigate("/posts");
  };
  return (
    <div>
      <h1>Create a new post!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="Enter Title"
          required
        />
        <input
          type="text"
          value={contentInput}
          onChange={(e) => setContentInput(e.target.value)}
          placeholder="Enter Content"
          required
        />
        <button type="submit">Add</button>
      </form>
      <Link to={"/posts"}>Go to your posts list</Link>
    </div>
  );
};

export default AddPost;
