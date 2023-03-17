import styles from "./styles.module.css";
const Button = ({ name, type, span }) => {
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
      <button type="button">
        <span>{span}</span>
        {name}
      </button>
    </div>
  );
};

export default Button;
