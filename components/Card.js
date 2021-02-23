import React from "react";
import Link from "next/link";

const Card = (props, key) => {
  const { moviesList = movies } = props;
  return (
    <>
      <section key={key}>
        <figure>
          <img src={moviesList.cover} />
          <p></p>
          <p></p>
        </figure>
        <div>
          <Link href={`/oneMovie/${moviesList._id}`}>
            <a>{moviesList.title}</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Card;
