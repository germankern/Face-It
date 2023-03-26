import Image from "next/image";
import React from "react";
import Eventos from "../../assets/images/Eventos.svg";
import Incripciones from "../../assets/images/Incripciones.svg";
import Recomendaciones from "../../assets/images/Recomendaciones.svg";
import styles from "./styles.module.css";
import Link from "next/link";

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
    <p className={styles.containerMainParagraph}>
      {props.parrafo1} <br />
      {props.parrafo2}
    </p>
  );
};

const ButtonLinksContainer = () => {
  const width = 1024; // Usar css
  return (
    <div className={styles.linkContainer}>
      <Link href="/eventosFAQ">
        <div className={styles.linkItems}>
          <Image className={styles.imgItems} src={Eventos} alt="" />
          <p id={styles.linkEvents} className={styles.linkEvents}>
            Eventos
          </p>
          {width > 768 ? (
            <Parrafo
              parrafo1={parrafo[0].parrafo1}
              parrafo2={parrafo[0].parrafo2}
            />
          ) : (
            ""
          )}
        </div>
      </Link>
      <Link href="/inscripcionesFAQ">
        <div className={styles.linkItems}>
          <Image className={styles.imgItems} src={Incripciones} alt="" />
          <p id={styles.linkEvents} className={styles.linkEvents}>
            Inscripciones
          </p>
          {width > 768 ? (
            <Parrafo
              parrafo1={parrafo[1].parrafo1}
              parrafo2={parrafo[1].parrafo2}
            />
          ) : (
            ""
          )}
        </div>
      </Link>
      <Link href="recomendacionesFAQ">
        <div className={styles.linkItems}>
          <Image className={styles.imgItems} src={Recomendaciones} alt="" />
          <p id={styles.linkEvents} className={styles.linkEvents}>
            Recomendaciones
          </p>
          {width > 768 ? (
            <Parrafo
              parrafo1={parrafo[2].parrafo1}
              parrafo2={parrafo[2].parrafo2}
            />
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
};

export default ButtonLinksContainer;
