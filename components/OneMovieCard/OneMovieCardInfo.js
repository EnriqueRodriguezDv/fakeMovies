import React from "react";

import style from "./oneMovieCardInfo.module.scss";

const OneMovieCardInfo = ({ title, info }) => {
  return (
    <>
      <div className={style.container}>
        <p>
          <b>{title}:&nbsp;</b>
        </p>
        <p>{info}</p>
      </div>
    </>
  );
};

export default OneMovieCardInfo;
