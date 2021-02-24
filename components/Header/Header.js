import React from "react";
import Link from "next/link"

import styles from "./header.module.scss"

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h2>Movies Fake</h2>
        </div>
        <nav className={styles.nav}>
          <Link href={"/log-in"}>
            <a>Log in</a>
          </Link>
          <Link  href={"/new-user"} >
            <a className={styles.linkSeparator} >New User</a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
