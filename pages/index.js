import React from "react";

import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

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
      <Header />
      <section>
        <h2>Movies</h2>
        {moviesList == null
          ? null
          : moviesList.map((item) => <Card moviesList={item} key={item._id} />)}
      </section>
      <Footer />
    </>
  );
};

export default Home;
