import React from "react";
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";

const FormTodo = ({ create, setVisibleModal }) => {
  const [formValue, setFormValue] = React.useState({
    title: "",
    desc: "",
  });

  const changeFormValue = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const addNewPost = (e) => {
    e.preventDefault();
    if (!formValue.title || !formValue.desc) {
      alert("Formani toltir...");
      return;
    }

    const newTodo = {
      id: Date.now(),
      ...formValue,
    };

    create(newTodo);
    setVisibleModal(false);

    setFormValue({
      title: "",
      desc: "",
    });
  };

  return (
    <div className="form-block">
      <form className="form-current" onSubmit={addNewPost}>
        <div className="form-control">
          <MyInput
            name="title"
            type="text"
            value={formValue.title}
            placeholder="Название поста"
            onChange={changeFormValue}
          />
        </div>
        <div className="form-control">
          <MyInput
            name="desc"
            type="text"
            value={formValue.desc}
            placeholder="Описание поста"
            onChange={changeFormValue}
          />
        </div>
        <MyButton>add post</MyButton>
      </form>
    </div>
  );
};

export default FormTodo;
