import styles from "./styles.module.css";
const TextArea = (props) => {
  return (
    <div className={styles.textArea}>
      <label>
        <h2>{props.title}</h2>
      </label>
      <textarea placeholder={props.placeHolder}></textarea>
    </div>
  );
};

export default TextArea;
