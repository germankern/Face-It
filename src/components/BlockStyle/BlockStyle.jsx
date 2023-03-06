import styles from "./style.module.css";

const BlockStyle = (props) => {
  return (
    <div className={styles.containerBlockStyle}>
      <p>{props.parrafo}</p>
      <b>{props.email}</b>
    </div>
  );
};

export default BlockStyle;
