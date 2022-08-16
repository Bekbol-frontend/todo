import React from "react";
import MyButton from "./UI/MyButton";

const PostItem = ({ data, number, remove }) => {
  return (
    <div className="post">
      <div className="post-info">
        <h1>
          {number} {data.title}
        </h1>
        <p>{data.desc}</p>
      </div>
      <div className="post-actions">
        <MyButton type="button" onClick={() => remove(data.id)}>
          delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
