import React from "react";
import FormTodo from "../FormTodo";
import classes from "./MyModal.module.css";

const MyModal = ({ createPost, visibleModal, setVisibleModal }) => {
  
  const classesModal = React.useMemo(() => {
    if (visibleModal) {
      return [classes.modalBlock, classes.active].join(" ");
    }

    return classes.modalBlock;
  }, [visibleModal]);

  const hideModal = () => setVisibleModal(false);

  return (
    <div className={classesModal} onClick={hideModal}>
      <div className={classes.modalInner} onClick={(e) => e.stopPropagation()}>
        <button className={classes.ext} onClick={hideModal}>
          &times;
        </button>
        <FormTodo create={createPost} setVisibleModal={setVisibleModal} />
      </div>
    </div>
  );
};

export default MyModal;
