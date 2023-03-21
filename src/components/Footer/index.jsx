import React from "react";
import Contact from "../Contact";
import Networks from "../Networks";
import Copyright from "../Copyright";
import styles from "./styles.module.css";
import Rules from "../Rules";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const eventos = router.pathname === "/eventos";
  return (
    <>
      <div
        className={`${styles.informationContainer} ${
          eventos ? styles.eventosFooterStyles : " "
        } `}
      >
        <Contact />
        <Networks />
        <Copyright />
      </div>

      <div
        className={`${styles.informationContainerDesktop} ${
          eventos ? styles.eventosFooterStyles : " "
        }`}
      >
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
