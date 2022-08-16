import React from "react";
import MyInput from "./UI/MyInput";
import MySelect from "./UI/MySelect";

const PostFilter = ({ filterPost, handleFilterSort }) => {
  return (
    <div>
      <MyInput
        name="query"
        placeholder="Поиск..."
        value={filterPost.query}
        onChange={handleFilterSort}
      />
      <MySelect
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "desc", name: "По описанию" },
        ]}
        changeSelect={handleFilterSort}
        value={filterPost}
      />
    </div>
  );
};

export default PostFilter;
