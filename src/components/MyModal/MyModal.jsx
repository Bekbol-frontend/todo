import React from "react";
import FormTodo from "../FormTodo";
import classes from "./MyModal.module.css";

const MyModal = ({ createPost, visibleModal, setVisibleModal }) => {
  function classModal() {
    if (visibleModal) {
      return [classes.modalBlock, classes.active].join(" ");
    }

    return classes.modalBlock;
  }

  return (
    <div className={classModal()}>
      <div className={classes.modalInner}>
        <button className={classes.ext} onClick={() => setVisibleModal(false)}>
          &times;
        </button>
        <FormTodo create={createPost} />
      </div>
    </div>
  );
};

export default MyModal;
