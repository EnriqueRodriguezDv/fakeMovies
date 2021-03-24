import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router";

import PieceForm from "./PieceForm";

import styles from "./form.module.scss";

const Form = (props) => {
  const { method, data } = props;
  const [form, setValues] = useState({});

  if (data == undefined) {
    null;
  }

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      await fetch(`/api/movies${data ? "/" + data._id : ""}`, {
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
        method: method,
      });

      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <form onSubmit={registerUser} className={styles.form}>
          <div>
            <PieceForm
              type="text"
              title="Title"
              handle={handleInput}
              toUpdate={data ? data.title : undefined}
            />
            <h6>*Requerid</h6>
            <PieceForm
              type="url"
              title="Cover"
              handle={handleInput}
              toUpdate={data ? data.cover : undefined}
            />
            <h6>*Requerid, Only url</h6>
            <PieceForm
              type="number"
              title="Year"
              handle={handleInput}
              toUpdate={data ? data.year : undefined}
            />
            <PieceForm
              type="number"
              title="Duration"
              handle={handleInput}
              toUpdate={data ? data.duration : undefined}
            />
            <div>
              <label htmlFor="contentRating">Content Rating</label>
              <select
                id="contentRating"
                name="contentRating"
                onChange={handleInput}
                defaultValue={data ? data.contentRating : undefined}
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
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              onChange={handleInput}
              value={data ? data.description : undefined}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};

export default Form;
