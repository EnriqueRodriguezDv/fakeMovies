import React from "react";

const PieceForm = ({ title, type, handle, toUpdate }) => {
  return (
    <>
      <label htmlFor={title}>{title}</label>
        <input
          id={title}
          type={type}
          onChange={handle}
          name={title.toLowerCase()}
          value={toUpdate}
        ></input>
    </>
  );
};

export default PieceForm;
