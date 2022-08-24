import React from "react";
import { Posts, MyModal, PostFilter, MyButton, Pagination } from "./components";
import { useSortedAndQueryPosts } from "./hooks/usePosts";
import { useFetching } from "./hooks/useFetching";
import { getAllApi } from "./API/getAllProducts";
import { getPageCount } from "./utils/pages";
import "./styles/main.css";

const App = () => {
  const [posts, setPosts] = React.useState([]);
  const [filterPost, setFilterPost] = React.useState({
    sort: "",
    query: "",
  });
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [getPosts, loadingPosts, errorPosts] = useFetching(async () => {
    const response = await getAllApi.getAll(limit, page);
    if (response.status === 200) {
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(parseInt(totalCount), limit));
      setPosts(response.data);
    }
  });

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    getPosts();
  }, [page]);

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

  const result = React.useMemo(() => {
    const pagesArray = [];

    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }, [posts, totalPages]);

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
      {loadingPosts ? (
        <h1
          style={{
            color: "royalblue",
            textAlign: "center",
            margin: "20px 0px",
          }}
        >
          Loading...
        </h1>
      ) : (
        <>
          <Posts
            data={sortedAndSearchedPosts}
            title="Posts-Javascipt"
            remove={deletePost}
          />
          <Pagination
            paginations={result}
            changePage={setPage}
            current={current}
            setCurrent={setCurrent}
          />
        </>
      )}
      {errorPosts && (
        <h1
          style={{ textAlign: "center", color: "crimson", margin: "20px 0px" }}
        >
          Error: {errorPosts}
        </h1>
      )}
    </div>
  );
};

export default App;
