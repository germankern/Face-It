import React from "react";
import Button from "../Button";
import styles from "./styles.module.css";

const ConveniosSection = () => {
  return (
    <>
      <div className={styles.conveniosSection}>
        <h2>
          ¿Quieres llevar Face It<br></br>a tu ciudad?
        </h2>
        <p>
          Te brindamos la asesoría a tu medida para que inicies tu propio
          negocio y seas parte de esta comunidad.
        </p>
        <div className={styles.conveniosSectionBtn}>
          <Button name={"Contáctanos"} type={"button"}></Button>
        </div>
      </div>
      <div className={styles.infoBgPink}>
        <p>
          Haz que muchas personas vivan esta experiencia en tu ciudad.{" "}
          <br className={styles.desktop} />
          Elige el plan que más te guste y escríbenos un correo a{" "}
          <a href="">info@faceitcitasrápidas.com</a>
        </p>
      </div>
    </>
  );
};

export default ConveniosSection;
