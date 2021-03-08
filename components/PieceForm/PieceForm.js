import React from "react";

const PieceForm = ({ title, type }) => {
  return (
    <>
      <p>{title}</p>
      <input id={title} type={type}></input>
    </>
  );
};

export default PieceForm;
