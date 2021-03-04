import React from "react";
import OneMovieCardInfo from "./OneMovieCardInfo";

const OneMovieCard = ({ movie }) => {
  return (
    <>
      <section>
        <div>
          <figure>
            <img src={movie.cover} alt={movie.title} />
          </figure>
          <div>
            <OneMovieCardInfo title={"title"} info={movie.title} />
            <OneMovieCardInfo title={"Year"} info={movie.year} />
            <OneMovieCardInfo title={"Duration"} info={movie.duration} />
            <OneMovieCardInfo
              title={"Content Rating"}
              info={movie.contentRating}
            />
          </div>
        </div>
        <p>{movie.description}</p>
      </section>
    </>
  );
};

export default OneMovieCard;
