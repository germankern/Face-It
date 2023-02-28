import Image from "next/image";
import React from "react";
import Eventos from "../../assets/images/Eventos.svg";
import Incripciones from "../../assets/images/Incripciones.svg";
import Recomendaciones from "../../assets/images/Recomendaciones.svg";
import styles from "./styles.module.css";

const parrafo = [
  {
    parrafo1: "Descubre mas sobre",
    parrafo2: "Nuestra propuesta",
  },
  {
    parrafo1: "Que hacer para",
    parrafo2: "participar",
  },
  {
    parrafo1: "Tipos y consejos para tu",
    parrafo2: "primera cita",
  },
];

const Parrafo = (props) => {
  return (
    <p>
      {props.parrafo1} <br />
      {props.parrafo2}
    </p>
  );
};

const ButtonLinksContainer = () => {
  const width = 1024; // Usar css
  return (
    <div className={styles.linkContainer}>
      <div className={styles.linkItems}>
        <Image className={styles.imgItems} src={Eventos} alt="" />
        <a className={styles.linkEvents} href="https://www.google.com/?hl=es">
          Eventos
        </a>
        {width > 768 ? (
          <Parrafo
            parrafo1={parrafo[0].parrafo1}
            parrafo2={parrafo[0].parrafo2}
          />
        ) : (
          ""
        )}
      </div>
      <div className={styles.linkItems}>
        <Image className={styles.imgItems} src={Incripciones} alt="" />
        <a className={styles.linkEvents} href="https://www.google.com/?hl=es">
          Inscripciones
        </a>
        {width > 768 ? (
          <Parrafo
            parrafo1={parrafo[1].parrafo1}
            parrafo2={parrafo[1].parrafo2}
          />
        ) : (
          ""
        )}
      </div>
      <div className={styles.linkItems}>
        <Image className={styles.imgItems} src={Recomendaciones} alt="" />
        <a className={styles.linkEvents} href="https://www.google.com/?hl=es">
          Recomendaciones
        </a>
        {width > 768 ? (
          <Parrafo
            parrafo1={parrafo[2].parrafo1}
            parrafo2={parrafo[2].parrafo2}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ButtonLinksContainer;
