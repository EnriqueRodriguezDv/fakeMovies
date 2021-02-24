import React from "react";
import Link from "next/link";

import styles from "./card.module.scss"

const Card = (props, key) => {
  const { moviesList = movies } = props;
  return (
    <>
      <section className={styles.sectionCard} key={key}>
        <figure className={styles.figure}>
          <img className={styles.img} src={moviesList.cover} />
          <p className={styles.iconLike}>L</p>
          <p className={styles.iconPlus}>+</p>
        </figure>
        <div className={styles.titleBox}>
          <Link href={`/oneMovie/${moviesList._id}`}>
            <a >{moviesList.title}</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Card;
