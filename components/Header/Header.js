import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./header.module.scss";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <a>
              <h2>Movies Fake</h2>
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          {router.route === "/" ? (
            <Link href={"/addMovie"}>
              <a className={styles.link}>Add movie</a>
            </Link>
          ) : null}
        </nav>
      </header>
    </>
  );
};

export default Header;
