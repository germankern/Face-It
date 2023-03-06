import styles from "./style.module.css";

const UnderlineQuestions = ({ question, text, placeHolder }) => {
  return (
    <div className={styles.containerQuestions}>
      <label>{question}</label>
      {text ? (
        <div className={styles.containerInput}>
          <input
            className={styles.inputAnswers}
            placeholder={[placeHolder != "" ? placeHolder : ""]}
          ></input>
          <p>{text}</p>
        </div>
      ) : (
        <input
          className={styles.inputAnswers}
          placeholder={[placeHolder != "" ? placeHolder : ""]}
        ></input>
      )}
    </div>
  );
};

export default UnderlineQuestions;
