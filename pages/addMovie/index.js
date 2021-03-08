import React from "react";
import fetch from "isomorphic-unfetch";

import PieceForm from "../../components/PieceForm/PieceForm";

import styles from "./addMovie.module.scss";

const addMovie = () => {
  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://fake-movies.vercel.app/api/movies", {
        body: JSON.stringify({
          title: event.target.Title.value,
          year: event.target.Year.value,
          cover: event.target.Cover.value,
          description: event.target.description.value,
          duration: event.target.Duration.value,
          contentRating: event.target.contentRating.value,
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
  
      const result = await res.json();
      console.log(result);
      return result;
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <section>
        <form onSubmit={registerUser} className={styles.form}>
          <div>
            <PieceForm type="text" title="Title" />
            <h6>*Requerid</h6>
            <PieceForm type="url" title="Cover" />
            <h6>*Requerid, Only url</h6>
            <PieceForm type="number" title="Year" />
            <PieceForm type="number" title="Duration" />
            <div>
              <p>Content Rating</p>
              <select id="contentRating">
                <option value="Not rated">Not rated</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
              </select>
            </div>
          </div>
          <div>
            <p>Description</p>
            <textarea id="description" />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};

export default addMovie;
