import React from "react";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <section>
          <h3>About Me</h3>
          <a href="https://enriquerodriguezdv.github.io/porfolioReact/dist/index.html">
            Web
          </a>
        </section>
        <section>
          <h3>Contact</h3>
          <p>juanenriquerodriguezgarcia87@gmail.com</p>
        </section>
        <section>
          <h3>Make for</h3>
          <p>To practice next.js</p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
