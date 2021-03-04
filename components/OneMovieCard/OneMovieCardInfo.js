import React from "react";

const OneMovieCardInfo = ({ title, info }) => {
  return (
    <>
      <div>
        <b>{title}:</b>
        <p>{info}</p>
      </div>
    </>
  );
};

export default OneMovieCardInfo;
