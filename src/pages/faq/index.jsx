import React from "react";
import FAQmobile from "@/components/FAQmobile";
import FAQdesktop from "@/components/FAQdesktop";
import styles from "./style.module.css";

export default function FaqPage() {
  return (
    <>
      <div className={styles.mobileFAQ}>
        <FAQmobile />
      </div>
      <div className={styles.desktopFAQ}>
        <FAQdesktop />
      </div>
    </>
  );
}
