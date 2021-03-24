import React from "react";
import fetch from "isomorphic-unfetch";

import Card from "../components/Card/Card";
import PaginationList from "../components/PaginationList/PaginationList";

import styles from "./index.module.scss";

// export const getStaticProps = async () => {
export const getServerSideProps = async () => {
  const response = await fetch("https://fake-movies.vercel.app/api/movies");
  const data = await response.json();

  return {
    props: {
      moviesList: data,
    },
  };
};

const Home = ({ moviesList }) => {
  // const [moviesList, setMoviesList] = useState([]);

  // useEffect(() => {
  //   fetch("/api/movies")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMoviesList(data);
  //     });
  // });

  return (
    <>
      <section className={styles.sectionCard}>
        <h2 className={styles.titleMovies}>Movies</h2>
        <div className={styles.containerCard}>
          {moviesList == null
            ? null
            : moviesList
                .map((item, index) => <Card moviesList={item} key={index} />)
                .reverse()}
        </div>
        {/* <PaginationList movieList={moviesList} /> */}
      </section>
    </>
  );
};

export default Home;
