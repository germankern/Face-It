import { useState } from "react";
import ModalCompleted from "../ModalCompleted";
import SucessMessage from "../SucessMessage";
import styles from "./styles.module.css";

const Button = ({ name, type, span }) => {
  const buttonType = type === "submit" ? "submit" : "button";
  const [activeModal, setActiveModal] = useState(false);
  return (
    <div
      className={`${styles.containerButtom} ${
        type === "survey" ? styles.buttonSurvey : ""
      } ${type === "submit" ? styles.buttonSubmit : ""}`}
    >
      <button type={buttonType} onClick={() => setActiveModal(true)}>
        <span>{span}</span>
        {name}
      </button>
      {activeModal && type === "submit" ? (
        <ModalCompleted>
          <SucessMessage />
        </ModalCompleted>
      ) : null}
    </div>
  );
};

export default Button;
