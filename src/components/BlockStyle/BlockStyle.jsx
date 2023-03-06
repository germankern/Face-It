import styles from "./style.module.css";

<<<<<<< HEAD
const BlockStyle = (props) => {
  return (
    <div className={styles.containerBlockStyle}>
      <p>{props.parrafo}</p>
      <b>{props.email}</b>
=======
const BlockStyle = ({ parrafo, email }) => {
  return (
    <div className={styles.containerBlockStyle}>
      <p>{parrafo}</p>
      <b>{email}</b>
>>>>>>> terms
    </div>
  );
};

export default BlockStyle;
