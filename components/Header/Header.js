import React from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

import styles from "./header.module.scss";

const Header = () => {
  const router = useRouter();

  const handleOnClick = () => {
    Router.push(`/updateMovie/${router.query.id}`)
  }

  const renderSwitch = (params) => {
    switch (params) {
      case "/":
        return (
          <Link href={"/addMovie"}>
            <a className={styles.link}>Add movie</a>
          </Link>
        );
      case `/oneMovie/[id]`:
        return (
            <a className={styles.link}  onClick={handleOnClick}>Update movie</a>
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
        <nav className={styles.nav}>{renderSwitch(router.route)}</nav>
      </header>
    </>
  );
};

export default Header;
