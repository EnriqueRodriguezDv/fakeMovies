import React from "react";
import Link from "next/link";

import styles from "./card.module.scss";

const Card = (props, key) => {
  const { moviesList = movies } = props;
  return (
    <>
      <section className={styles.sectionCard} key={key}>
        <Link href={`/oneMovie/${moviesList._id}`}>
          <div>
            <figure className={styles.figure}>
              <img className={styles.img} src={moviesList.cover} />
            </figure>
            <div className={styles.titleBox}>
              <a>{moviesList.title}</a>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Card;
