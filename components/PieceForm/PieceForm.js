import React from "react";

const PieceForm = ({ title, type, handle}) => {
  return (
    <>
      <label htmlFor={title}></label>
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
