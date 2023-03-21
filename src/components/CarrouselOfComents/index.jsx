import Image from "next/image";
import ArrowLeft from "../../assets/images/ArrowLeft.svg";
import ArrowRigth from "../../assets/images/ArrowRigth.svg";
import style from "./style.module.css";
import React, { useState } from "react";
import { comments } from "./strings.js";

const CarouselOfComents = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const handleLeftArrowClick = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(comments.length - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentPosition < comments.length - 1) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
  };

  return (
    <>
      <div className={style.carrouselComments}>
        <Image
          onClick={handleLeftArrowClick}
          src={ArrowLeft}
          alt={"flecha izquierda"}
        />
        <h3 key={comments.currentPosition}>
          {comments.slice(currentPosition, currentPosition + 1)}
        </h3>
        <Image
          onClick={handleRightArrowClick}
          src={ArrowRigth}
          alt={"flecha derecha"}
        />
      </div>
    </>
  );
};

export default CarouselOfComents;
