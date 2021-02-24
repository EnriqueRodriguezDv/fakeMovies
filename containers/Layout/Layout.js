import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./layout.module.scss"

const Layout = ({children}) => {
  return (
    <>
      <Header  />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
