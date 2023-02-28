import styles from "./styles.module.css";

const Button = ({ name }) => {
  return (
    <div className={styles.containerButtom}>
      <button type="button">{name}</button>
    </div>
  );
};

export default Button;
