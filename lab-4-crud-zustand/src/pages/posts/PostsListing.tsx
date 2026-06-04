import { usePostStore } from "../../stores/post.store";
import { Link } from "react-router";

const PostsListing = () => {
  const posts = usePostStore((state) => state.posts);
  const nonDeletedPosts = posts.filter((post) => post.isDeleted === false);

  return (
    <div>
      <h1>Posts Listing Page</h1>
      <Link to={"/posts/new"}>Create New Post</Link>

      {nonDeletedPosts.length <= 0 ? (
        <h3>Your post list is empty</h3>
      ) : (
        <ul>
          {nonDeletedPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <strong>{post.title}</strong> - {post.content}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link to={"/trash"}>Go to trash</Link>
    </div>
  );
};

export default PostsListing;
