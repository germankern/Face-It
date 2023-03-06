import styles from "./style.module.css";

const BlockStyle = ({ parrafo, email }) => {
  return (
    <div className={styles.containerBlockStyle}>
      <p>{parrafo}</p>
      <b>{email}</b>
    </div>
  );
};

export default BlockStyle;
