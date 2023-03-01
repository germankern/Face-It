import React from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import Networks from "../Networks";
import Copyright from "../Copyright";
import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.informationContainer}>
      <Contact />
      <Networks />
      <Copyright />
    </div>
  );
}

export default Footer;
