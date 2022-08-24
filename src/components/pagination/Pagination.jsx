import React from "react";
import "./pagination.css";

const Pagination = ({ paginations, changePage, current, setCurrent }) => {
  if (!paginations) return;

  const handlePage = (index) => {
    changePage(index + 1);
    setCurrent(index);
  };

  return (
    <div className="pags-btn">
      {paginations.map((item, index) => (
        <button
          key={index}
          className={current === index ? "btn active" : "btn"}
          onClick={() => handlePage(index)}
        >
          {item + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
