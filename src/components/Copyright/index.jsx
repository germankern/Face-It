import styles from "./styles.module.css";
import Brand from "../Brand";

const Copyright = () => {
  return (
    <div className={styles.containerCopyright}>
      <p>FaceIt | 2023</p>
      <Brand
        width="100%"
        height="50px"
        marginRight="20px"
        justifyContent="end"
      ></Brand>
    </div>
  );
};

export default Copyright;
