import React from "react";

import styles from "./li.module.scss";

const Li = ({ valueButton }) => {
  return (
    <>
      <li className={styles.li}>
        <button
          id={`buttonID${valueButton}`}
          className={styles.button}
          type="button"
        >
          {valueButton}
        </button>
      </li>
    </>
  );
};

export default Li;
