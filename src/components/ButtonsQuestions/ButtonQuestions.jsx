import styles from "./style.module.css";

const ContainerRadio = (props) => {
  return (
    <div className={styles["containerRadio"]}>
      <label className={styles["buttonRadio"]}>
        <input type="radio" />
        {props.option}
        <i></i>
      </label>
    </div>
  );
};

const ButtonQuestions = (props) => {
  const options = Object.values(props.question);

  return (
    <>
      <div className={styles.buttonQuestions}>
        <h2>{props.title}</h2>
        {options.map((item, index) => (
          <ContainerRadio key={index} option={item}></ContainerRadio>
        ))}
      </div>
    </>
  );
};

export default ButtonQuestions;
