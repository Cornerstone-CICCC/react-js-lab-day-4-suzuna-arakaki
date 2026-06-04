import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import PostsListing from "./pages/posts/PostsListing";
import PostDetail from "./pages/posts/PostDetail";
import AddPost from "./pages/posts/AddPost";
// import EditPost from "./pages/posts/EditPost";
import Deleted from "./pages/Deleted";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PostsListing />} />
        <Route path="posts/:id" element={<PostDetail />} />
        <Route path="posts/new" element={<AddPost />} />
        {/* <Route path="posts/:id/edit" element={<EditPost />} /> */}
        <Route path="trash" element={<Deleted />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
