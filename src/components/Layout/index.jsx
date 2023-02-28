import React from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import Networks from "../Networks";
import Copyright from "../Copyright";
import styles from "./styles.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <div className="information-container">
        <Contact />
        <Networks />
      </div>
      <Copyright />
    </div>
  );
}

export default Layout;
