import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./header.module.scss";

const Header = () => {
  const router = useRouter()
  const renderSwitch = (params) => {
    switch (params) {
      case "/":
        return (
          <Link href={"/addMovie"}>
            <a className={styles.link}>Add movie</a>
          </Link>
        );
      case `/oneMovie/${id}`:
        return (
          <Link href={"/updateMovie"}>
            <a className={styles.link}>Update movie</a>
          </Link>
        );
      default:
        return null;
    }
  };
  
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
          {renderSwitch(router.route)}
        </nav>
      </header>
    </>
  );
};

export default Header;
