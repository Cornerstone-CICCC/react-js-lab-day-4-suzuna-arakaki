import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Welcom!</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/posts"}>Post List</Link>
          </li>
          <li>
            <Link to={"/trash"}>Deleted Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
