import React from "react";
import { Posts, MyModal, PostFilter, MyButton } from "./components";
import { useSortedAndQueryPosts } from "./hooks/usePosts";
import "./styles/main.css";

const getLocalTodo = () => {
  return localStorage.getItem("post")
    ? JSON.parse(localStorage.getItem("post"))
    : [];
};

const App = () => {
  const [posts, setPosts] = React.useState(getLocalTodo);
  const [filterPost, setFilterPost] = React.useState({
    sort: "",
    query: "",
  });
  const [visibleModal, setVisibleModal] = React.useState(false);

  const handleFilterSort = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setFilterPost((prev) => ({ ...prev, [name]: value }));
  };

  const deletePost = (id) => {
    const filteredPosts = posts.filter((post) => post.id !== id);
    localStorage.setItem("post", JSON.stringify([...filteredPosts]));
    setPosts(filteredPosts);
  };

  const createPost = (data) => {
    localStorage.setItem("post", JSON.stringify([...posts, data]));
    setPosts([...posts, data]);
  };

  const sortedAndSearchedPosts = useSortedAndQueryPosts(
    posts,
    filterPost.sort,
    filterPost.query
  );

  return (
    <div className="container">
      <MyModal
        createPost={createPost}
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
      />
      <MyButton
        style={{ margin: "20px 0px", display: "block" }}
        onClick={() => setVisibleModal(true)}
      >
        show form
      </MyButton>
      <PostFilter filterPost={filterPost} handleFilterSort={handleFilterSort} />
      <Posts
        data={sortedAndSearchedPosts}
        title="Posts-Javascipt"
        remove={deletePost}
      />
    </div>
  );
};

export default App;
