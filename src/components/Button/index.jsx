import { useState } from "react";
import ModalCompleted from "../ModalCompleted";
import SucessMessage from "../SucessMessage";
import styles from "./styles.module.css";

const Button = ({ name, type, span, setActiveModal }) => {
  const buttonType = type === "submit" ? "submit" : "button";
  const verficationSubmit = () => {
    type === "submit" ? setActiveModal(true) : null;
  };
  return (
    <div
      className={`${styles.containerButtom} ${
        type === "survey" ? styles.buttonSurvey : ""
      } ${type === "submit" ? styles.buttonSubmit : ""} 
          ${
            type === "submitcomentario"
              ? styles.buttonSubmit + " " + styles.buttonSubmitComentario
              : ""
          }
     `}
    >
      <button type={buttonType} onClick={verficationSubmit}>
        <span>{span}</span>
        {name}
      </button>
    </div>
  );
};

export default Button;
