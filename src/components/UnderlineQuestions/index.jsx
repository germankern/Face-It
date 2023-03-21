import styles from "./style.module.css";

const UnderlineQuestions = ({
  question,
  text,
  placeHolder,
  setUsername,
  data,
  onChange,
  name,
}) => {
  function addUserNameNetworks(event) {
    if (setUsername) {
      setUsername(event.target.value);
    } else {
      onChange(event);
    }
  }
  return (
    <div className={styles.containerQuestions}>
      <label>{question}</label>
      {text ? (
        <div className={styles.containerInput}>
          <input
            className={styles.inputAnswers}
            placeholder={[placeHolder != "" ? placeHolder : ""]}
            name={name}
            value={data}
            onChange={addUserNameNetworks}
          ></input>
          <p>{text}</p>
        </div>
      ) : (
        <input
          className={styles.inputAnswers}
          placeholder={[placeHolder != "" ? placeHolder : ""]}
          name={name}
          value={data}
          onChange={addUserNameNetworks}
        ></input>
      )}
    </div>
  );
};

export default UnderlineQuestions;
