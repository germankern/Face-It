import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Image01 from "../../assets/images/01-image-gallery-eventos.jpg";
import Image02 from "../../assets/images/02-image-gallery-eventos.jpg";
import Image03 from "../../assets/images/03-image-gallery-eventos.jpg";
import Image04 from "../../assets/images/04-image-gallery-eventos.jpg";
import Image05 from "../../assets/images/05-image-gallery-eventos.jpg";
import Image06 from "../../assets/images/06-image-gallery-eventos.jpg";
import Image07 from "../../assets/images/07-image-gallery-eventos.jpg";
import Image08 from "../../assets/images/08-image-gallery-eventos.jpg";
import { handleVideoEnd } from "../EventosMobile";

const GalleryModal = () => {
  return (
    <>
      <div className={style.background}>
        <div className={style.containerGallery}>
          <div className={style.galleryItem}>
            <Image src={Image01} alt={"fotos de eventos realizados cartel"} />
            <Image src={Image02} alt={"fotos de eventos realizados tragos"} />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <Image src={Image03} alt={"fotos de eventos realizados mesas"} />
          </div>
          <div className={style.column}>
            <Image src={Image04} alt={"fotos de eventos realizados personas"} />
            <video autoPlay muted playsInline onEnded={handleVideoEnd}>
              <source
                src={"/01-video-gallery-eventos.mp4"}
                type={"video/mp4"}
              />
            </video>
          </div>
          <div className={style.column}>
            <Image src={Image05} alt={"fotos de eventos realizados tarjetas"} />
            <Image src={Image06} alt={"fotos de eventos realizados parejas"} />
          </div>
        </div>
        <div className={style.containerGallery2}>
          <div className={style.galleryItem2}>
            <Image src={Image07} alt={"fotos de eventos realizados parejas2"} />
            <video autoPlay muted playsInline onEnded={handleVideoEnd}>
              <source
                src={"/02-video-gallery-eventos.mp4"}
                type={"video/mp4"}
              />
            </video>
          </div>
        </div>
        <div className={style.containerGallery2}>
          <div className={style.galleryItem2}>
            <video autoPlay muted playsInline onEnded={handleVideoEnd}>
              <source
                src={"/03-video-gallery-eventos.mp4"}
                type={"video/mp4"}
              />
            </video>
            <Image src={Image08} alt={"eventos realizados cartel luminoso"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryModal;
