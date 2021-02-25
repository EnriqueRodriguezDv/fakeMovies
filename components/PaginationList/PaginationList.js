import React from "react";

import Li from "./Li";

import styles from "./paginationList.module.scss";

const PaginationList = (props) => {
  const { movieList } = props;
  return (
    <>
      <ul className={styles.ul}>
        <Li valueButton="<<" />

        {movieList.map((item, index) =>
          index % 12 != 0 ? null : (
            <Li key={index} valueButton={Math.round(index / 12 + 1)} />
          )
        )}

        <Li valueButton=">>" />
      </ul>
    </>
  );
};

export default PaginationList;
