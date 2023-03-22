import React, { useEffect, useState } from "react";
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
import ArrowLeft from "../../assets/images/ArrowLeft.svg";
import ArrowRigth from "../../assets/images/ArrowRigth.svg";
import { handleVideoEnd } from "../EventosMobile";

const images = [
  Image01,
  Image02,
  Image03,
  Image04,
  Image05,
  Image06,
  Image07,
  Image08,
];
const GalleryModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        setModalOpen(false);
      } else if (event.keyCode === 37) {
        handlePrevImage();
      } else if (event.keyCode === 39) {
        handleNextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setModalOpen]);

  return (
    <>
      <div className={style.background}>
        <div className={style.containerGallery}>
          <div className={style.galleryItem}>
            {modalOpen ? (
              <>
                <div className={style.modal}>
                  <Image
                    src={ArrowLeft}
                    alt="siguiente a la izquierda"
                    onClick={handlePrevImage}
                  />
                  <Image
                    src={images[selectedImageIndex]}
                    alt={"fotos de eventos realizados cartel"}
                  />
                  <button onClick={() => setModalOpen(false)}>X</button>
                  <Image
                    src={ArrowRigth}
                    alt="siguiente a la derecha"
                    onClick={handleNextImage}
                  />
                </div>
              </>
            ) : (
              <Image
                onClick={() => {
                  setSelectedImageIndex(0);
                  setModalOpen(true);
                }}
                src={Image01}
                alt={"fotos de eventos realizados cartel"}
              />
            )}
            <Image
              onClick={() => {
                setSelectedImageIndex(1);
                setModalOpen(true);
              }}
              src={Image02}
              alt={"fotos de eventos realizados tragos"}
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <Image
              onClick={() => {
                setSelectedImageIndex(2);
                setModalOpen(true);
              }}
              src={Image03}
              alt={"fotos de eventos realizados mesas"}
            />
          </div>
          <div className={style.column}>
            <Image
              onClick={() => {
                setSelectedImageIndex(3);
                setModalOpen(true);
              }}
              src={Image04}
              alt={"fotos de eventos realizados personas"}
            />
            <video autoPlay muted playsInline onEnded={handleVideoEnd}>
              <source
                src={"/01-video-gallery-eventos.mp4"}
                type={"video/mp4"}
              />
            </video>
          </div>
          <div className={style.column}>
            <Image
              onClick={() => {
                setSelectedImageIndex(4);
                setModalOpen(true);
              }}
              src={Image05}
              alt={"fotos de eventos realizados tarjetas"}
            />
            <Image
              onClick={() => {
                setSelectedImageIndex(5);
                setModalOpen(true);
              }}
              src={Image06}
              alt={"fotos de eventos realizados parejas"}
            />
          </div>
        </div>
        <div className={style.containerGallery2}>
          <div className={style.galleryItem2}>
            <Image
              onClick={() => {
                setSelectedImageIndex(6);
                setModalOpen(true);
              }}
              src={Image07}
              alt={"fotos de eventos realizados parejas2"}
            />
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
            <Image
              onClick={() => {
                setSelectedImageIndex(7);
                setModalOpen(true);
              }}
              src={Image08}
              alt={"eventos realizados cartel luminoso"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryModal;
