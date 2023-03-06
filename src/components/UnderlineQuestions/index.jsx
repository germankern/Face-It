import styles from "./style.module.css";

const UnderlineQuestions = (props) => {
  return (
    <div className={styles.containerQuestions}>
      <label>{props.question}</label>
      {props.text ? (
        <div className={styles.containerInput}>
          <input
            className={styles.inputAnswers}
            placeholder={[props.placeHolder != "" ? props.placeHolder : ""]}
          ></input>
          <p>{props.text}</p>
        </div>
      ) : (
        <input
          className={styles.inputAnswers}
          placeholder={[props.placeHolder != "" ? props.placeHolder : ""]}
        ></input>
      )}
    </div>
  );
};

export default UnderlineQuestions;
