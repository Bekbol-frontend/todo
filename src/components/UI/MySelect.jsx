import React from "react";

const MySelect = ({ defaultValue, options, changeSelect, value }) => {
  const styles = {
    maxWidth: "120px",
    width: "100%",
    margin: "20px 0px",
  };

  console.log(value.query);

  return (
    <div className="select" style={styles}>
      <select value={value.sort} onChange={changeSelect} name="sort">
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map((op) => (
          <option value={op.value} key={op.name}>
            {op.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
