import React from "react";
import fetch from "isomorphic-unfetch";

import OneMovieCard from "../../components/OneMovieCard/OneMovieCard";

export const getStaticPaths = async () => {
  const response = await fetch("https://fake-movies.vercel.app/api/movies");
  const data = await response.json();
  const paths = data.map((item) => ({
    params: {
      id: item._id,
      ...item,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://fake-movies.vercel.app/api/movies/${context.params?.id}`
  );
  const movie = await response.json();

  return {
    props: {
      movie,
    },
    revalidate: 1,
  };
};

const OneMovie = ({ movie }) => {
  return <>{movie == null ? null : <OneMovieCard movie={movie} />}</>;
};

export default OneMovie;
