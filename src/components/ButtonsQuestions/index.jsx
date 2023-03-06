import styles from "./style.module.css";

const ContainerRadio = ({ option }) => {
  return (
    <div className={styles.containerRadio}>
      <label className={styles.buttonRadio}>
        <input type="radio" />
        {option}
        <i></i>
      </label>
    </div>
  );
};

const ButtonQuestions = ({ question, title }) => {
  const options = Object.values(question);

  return (
    <>
      <div className={styles.buttonQuestions}>
        <h2>{title}</h2>
        {options.map((item, index) => (
          <ContainerRadio key={index} option={item}></ContainerRadio>
        ))}
      </div>
    </>
  );
};

export default ButtonQuestions;
