import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

import PieceForm from "../../components/PieceForm/PieceForm";

import styles from "./addMovie.module.scss";

const addMovie = () => {
  const [form, setValues] = useState({
    title: "",
    year: "",
    cover: "",
    description: "",
    duration: "",
    contentRating: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://fake-movies.vercel.app/api/movies", {
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();
      console.log(res.body);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <form onSubmit={registerUser} className={styles.form}>
          <div>
            <PieceForm type="text" title="Title" handle={handleInput} />
            <h6>*Requerid</h6>
            <PieceForm type="url" title="Cover" handle={handleInput} />
            <h6>*Requerid, Only url</h6>
            <PieceForm type="number" title="Year" handle={handleInput} />
            <PieceForm type="number" title="Duration" handle={handleInput} />
            <div>
              <p>Content Rating</p>
              <select
                id="contentRating"
                name="contentRating"
                onChange={handleInput}
              >
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
            <textarea
              id="description"
              name="description"
              onChange={handleInput}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};

export default addMovie;
