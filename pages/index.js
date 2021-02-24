import React from "react";

import Card from "../components/Card/Card";

import styles from "./index.module.scss";

import config from "../config";
const configUrl = config[1];

export const getStaticProps = async () => {
  const response = await fetch(`${configUrl.url}/api/movies`);
  const moviesList = await response.json();

  return {
    props: {
      moviesList,
    },
  };
};

const Home = ({ moviesList }) => {
  return (
    <>
      <section>
        <h2 className={styles.titleMovies}>Movies</h2>
        <container className={styles.containerCard}>
          {moviesList == null
            ? null
            : moviesList.map((item) => (
                <Card moviesList={item} key={item._id} />
              ))}
        </container>
      </section>
    </>
  );
};

export default Home;
