import React, { useEffect, useState } from "react";

import Card from "../components/Card/Card";
import PaginationList from "../components/PaginationList/PaginationList";

import styles from "./index.module.scss";

import mock from "../utils/mocks/movies";

import config from "../config";
const configUrl = config[1];

// export const getStaticProps = async () => {
//   const response = await fetch(`https://fake-movies.vercel.app//api/movies`);
//   const moviesList = await response.json();

//   return {
//     props: {
//       moviesList,
//     },
//   };
// };

const Home = () => {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    window
      .fetch("/api/movies")
      .then((response) => response.json())
      .then((data) => {
        setMoviesList(data);
      });
  });

  return (
    <>
      <section className={styles.sectionCard}>
        <h2 className={styles.titleMovies}>Movies</h2>
        <container className={styles.containerCard}>
          {moviesList == null
            ? null
            : moviesList.map((item, index) => (
                <Card moviesList={item} key={index} />
              ))}
        </container>
        <PaginationList movieList={moviesList} />
      </section>
    </>
  );
};

export default Home;
