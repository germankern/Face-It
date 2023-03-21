import React from "react";
import Navbar from "../Navbar";
import styles from "./styles.module.css";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.maxWidth}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
