import React from "react";

const PieceForm = ({ title, type }) => {
  return (
    <>
      <div>
        <p>{title}</p>
        <input type={type}></input>
      </div>
    </>
  );
};

export default PieceForm;
