import styles from "./styles.module.css";
const TextArea = ({ title, placeHolder, name, onChange, data }) => {
  return (
    <div className={styles.textArea}>
      <label>
        <h2>{title}</h2>
      </label>
      <textarea
        placeholder={placeHolder}
        value={data}
        name={name}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
