import React from "react";
import styles from "./styles.module.css";

const PlanesContainer = () => {
  return (
    <div className={styles.planesContainer}>
      <h2>Puedes elegir el plan que más se ajuste a lo que necesitas.</h2>
      <div className={styles.planes}>
        <h3>Plan básico</h3>
        <p>Logo, paleta de colores y set básico.</p>
      </div>
      <div className={styles.planes}>
        <h3>Plan profesional</h3>
        <p>Asesoría en organización de eventos.</p>
      </div>
      <div className={styles.planes}>
        <h3>Plan premium</h3>
        <p>Set básico y asesorías</p>
      </div>
    </div>
  );
};

export default PlanesContainer;
