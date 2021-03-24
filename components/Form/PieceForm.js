import React, { useState } from "react";

const PieceForm = ({ title, type, handle, toUpdate }) => {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <input
        id={title}
        type={type}
        onChange={handle}
        name={title.toLowerCase()}
        placeholder={toUpdate}
      ></input>
    </>
  );
};

export default PieceForm;
