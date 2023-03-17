import React from "react";
import styles from "./style.module.css";

const mediaSelector = (mobile, desktop) => (props) =>
  (
    <>
      <div className={styles.mobile}>{mobile(props)}</div>
      <div className={styles.desktop}>{desktop(props)}</div>
    </>
  );

export default mediaSelector;
