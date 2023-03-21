import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import ArrowHeader from "../../assets/images/ArrowHeader.svg";
import Velas from "../../assets/images/eventos-01-velas-desktop.jpg";
import CarouselOfComents from "../CarrouselOfComents";
import GalleryModal from "../GalleryModal";
import { handleVideoEnd } from "../EventosMobile";

const EventosDesktop = () => {
  return (
    <>
      <div className={style.sectionEventos}>
        <h2>Nuestros Eventos</h2>
        <Image src={ArrowHeader} alt={"flecha hacia abajo"} />
      </div>
      <section>
        <div className={style.divImages}>
          <Image src={Velas} alt={"vela en mesa"} />
          <video
            className={style.videoGifs}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src={"/VideoUno.mp4"} type={"video/mp4"} />
          </video>
        </div>
      </section>
      <CarouselOfComents />
      <GalleryModal />
    </>
  );
};

export default EventosDesktop;
