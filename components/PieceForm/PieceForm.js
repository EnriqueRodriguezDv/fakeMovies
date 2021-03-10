import React from "react";

const PieceForm = ({ title, type, handle }) => {
  return (
    <>
      <p>{title}</p>
      <input
        id={title}
        type={type}
        onChange={handle}
        name={title.toLowerCase()}
      ></input>
    </>
  );
};

export default PieceForm;
