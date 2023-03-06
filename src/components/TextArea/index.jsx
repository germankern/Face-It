import styles from "./styles.module.css";
const TextArea = ({ title, placeHolder }) => {
  return (
    <div className={styles.textArea}>
      <label>
        <h2>{title}</h2>
      </label>
      <textarea placeholder={placeHolder}></textarea>
    </div>
  );
};

export default TextArea;
