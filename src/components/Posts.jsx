import React from "react";
import PostItem from "./PostItem";

const Posts = ({ data, title, remove }) => {

  if(!data.length) {
    return (
      <div className="block-data" style={{textAlign: "center", color: "royalblue"}}>
        <h1>No Posts...</h1>
      </div>
    )
  }

  return (
    <div className="block-data">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "royalblue",
        }}
      >
        {title}
      </h1>
      <ul className="posts">
        {data.map((post, index) => (
          <PostItem key={post.id} data={post} remove={remove} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
