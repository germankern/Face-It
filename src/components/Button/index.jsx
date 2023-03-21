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
      <button type={type} onClick={verficationSubmit}>
        <span>{span}</span>
        {name}
      </button>
    </div>
  );
};

export default Button;
