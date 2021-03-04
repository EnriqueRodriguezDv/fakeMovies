import React from "react";
import Link from "next/link";

import styles from "./card.module.scss";

const Card = (props, key) => {
  const { moviesList = movies } = props;
  return (
    <>
      <section className={styles.sectionCard} key={key}>
        <Link href={`/oneMovie/${moviesList._id}`}>
          <a>
            <div>
              <figure className={styles.figure}>
                <img className={styles.img} src={moviesList.cover} />
              </figure>
              <div className={styles.titleBox}>
                <p>{moviesList.title}</p>
              </div>
            </div>
          </a>
        </Link>
      </section>
    </>
  );
};

export default Card;
