import React from "react";

import PieceForm from "../../components/PieceForm/PieceForm";

import styles from "./addMovie.module.scss";

const addMovie = () => {
  return (
    <>
      <section>
        <form method="POST" className={styles.form}>
          <div >
            <PieceForm type="text" title="Title" />
            <h6>*Requerid</h6>
            <PieceForm type="url" title="Cover" />
            <h6>*Requerid, Only url</h6>
            <PieceForm type="number" title="Year" />
            <PieceForm type="number" title="Duration" />
            <div>
              <p>Content Rating</p>
              <select>
                <option>Not rated</option>
                <option>G</option>
                <option>PG</option>
                <option>PG-13</option>
                <option>R</option>
                <option>NC-17</option>
              </select>
            </div>
          </div>
          <div >
            <p>Description</p>
            <textarea />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};

export default addMovie;
