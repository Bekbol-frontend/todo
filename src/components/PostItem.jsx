import React from "react";
import MyButton from "./UI/MyButton";

const PostItem = ({ data, remove }) => {
  return (
    <div className="post">
      <div className="post-info">
        <h1>
          {data.id} {data.title}
        </h1>
        <p>{data.body}</p>
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
