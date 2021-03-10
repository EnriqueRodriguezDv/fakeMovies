import React from "react";
import OneMovieCardInfo from "./OneMovieCardInfo";

import style from "./oneMovieCard.module.scss";

const OneMovieCard = ({ movie }) => {
  return (
    <>
      <section className={style.section}>
        <div className={style.container}>
          <figure>
            <img src={movie.cover} alt={movie.title} />
          </figure>
          <div>
            <OneMovieCardInfo title={"title"} info={movie.title} />
            {movie.year ? (
              <OneMovieCardInfo title={"Year"} info={movie.year} />
            ) : null}
            {movie.duration ? (
              <OneMovieCardInfo title={"Duration"} info={movie.duration} />
            ) : null}
            {movie.contentRating ? (
              <OneMovieCardInfo
                title={"Content Rating"}
                info={movie.contentRating}
              />
            ) : null}
          </div>
        </div>
        {movie.description ? <p>{movie.description}</p> : null}
      </section>
    </>
  );
};

export default OneMovieCard;
