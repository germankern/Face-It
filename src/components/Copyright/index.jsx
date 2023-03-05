import styles from "./styles.module.css";
import Brand from "../Brand";

const Copyright = () => {
  return (
    <div className={styles.containerCopyright}>
      <p>FaceIt | 2023</p>
      <Brand type="Copyright"></Brand>
    </div>
  );
};

export default Copyright;
