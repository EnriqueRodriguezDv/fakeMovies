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
  // console.log(path);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://fake-movies.vercel.app/api/movies/${params?.id}`
  );
  const movie = await response.json();

  return {
    props: {
      movie,
    },
  };
};

const OneMovie = ({ movie }) => {
  return (
    <>
      <OneMovieCard movie={movie} />
    </>
  );
};

export default OneMovie;
