import Image from "next/image";
import ArrowLeft from "../../assets/images/ArrowLeft.svg";
import ArrowRigth from "../../assets/images/ArrowRigth.svg";
import style from "./style.module.css";
import React, { useState } from "react";
import { comments } from "./strings.js";

const CarouselOfComments = () => {
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
        {comments
          .slice(currentPosition, currentPosition + 1)
          .map((comment, index) => (
            <h3 key={index}> {comment}</h3>
          ))}
        <Image
          onClick={handleRightArrowClick}
          src={ArrowRigth}
          alt={"flecha derecha"}
        />
      </div>
    </>
  );
};

export default CarouselOfComments;
