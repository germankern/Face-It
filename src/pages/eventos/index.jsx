import React from "react";
import EventosMobile from "@/components/EventosMobile";
import EventosDesktop from "@/components/EventosDesktop";
import style from "./style.module.css";

export default function EventosPage() {
  return (
    <>
      <div className={style.mobile}>
        <EventosMobile />
      </div>
      <div className={style.desktop}>
        <EventosDesktop />
      </div>
    </>
  );
}
