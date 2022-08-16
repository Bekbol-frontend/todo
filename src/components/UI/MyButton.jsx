import React from "react";

const MyButton = ({ children, ...props }) => {
  return (
    <button className="form-btn" {...props}>
      {children}
    </button>
  );
};

export default MyButton;
