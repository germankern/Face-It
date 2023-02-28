import React from "react";
import styles from "./styles.module.css";

const DescriptionSection = () => {
  return (
    <div className={styles.descriptionSectionContainer}>
      <h2 className={styles.h2Desc}>Aquí comienza tu historia de amor.</h2>
      <p className={styles.pDesc}>
        En FaceIt! te ofrecemos la posibilidad de encontrar pareja en un
        ambiente cómo y seguro, siguiendo la modalidad de citas rápidas.{" "}
      </p>
      <p className={styles.pDesc}>
        Si estás buscando a esa persona especial o simplemente te interesa pasar
        una noche divertida conociendo gente nueva, este es el lugar para ti.{" "}
      </p>
    </div>
  );
};

export default DescriptionSection;
