import React from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import Networks from "../Networks";
import Copyright from "../Copyright";
import styles from "./styles.module.css";
import Rules from "../Rules";

function Footer() {
  return (
    <>
      <div className={styles.informationContainer}>
        <Contact />
        <Networks />
        <Copyright />
      </div>

      <div className={styles.informationContainerDesktop}>
        <div className={styles.bodyFooter}>
          <Contact />
          <Networks />
          <Rules />
        </div>
        <Copyright />
      </div>
    </>
  );
}

export default Footer;
