import React from "react";
import FAQmobile from "@/components/FAQmobile";
import FAQdesktop from "@/components/FAQdesktop";
import style from "./style.module.css";

export default function FaqPage() {
  return (
    <>
      <div className={style.mobile}>
        <FAQmobile />
      </div>
      <div className={style.desktop}>
        <FAQdesktop />
      </div>
    </>
  );
}
