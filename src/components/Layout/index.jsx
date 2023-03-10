import React from "react";
import Navbar from "../Navbar";
import styles from "./styles.module.css";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
