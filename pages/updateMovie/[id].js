import React from "react";

import Form from "../../components/Form/Form";

// export const getStaticPaths = async () => {
//     const response = await fetch("https://fake-movies.vercel.app/api/movies");
//     const data = await response.json();
//     const paths = data.map((item) => ({
//       params: {
//         id: item._id,
//         ...item,
//       },
//     }));

//     return {
//       paths,
//       fallback: true,
//     };
//   };

// export const getStaticProps = async (context) => {
export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://fake-movies.vercel.app/api/movies/${context.params?.id}`
  );
  const movie = await response.json();

  return {
    props: {
      movie,
    },
  };
};

const updateMovie = ({ movie }) => {
  return (
    <>
      <Form method="PUT" data={movie} />
    </>
  );
};

export default updateMovie;
