import Link from "next/link";
import styles from "./styles.module.css";

const Button = ({ name, type, span, setActiveModal }) => {
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
      <Link href={"/survey"}>
        <button type={type} onClick={verficationSubmit}>
          <span>{span}</span>
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
