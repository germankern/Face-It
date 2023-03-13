import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import FAQeventos from "../../assets/images/FAQeventos.svg";
import FAQinscripciones from "../../assets/images/FAQinscripciones.svg";
import FAQrecomendaciones from "../../assets/images/FAQrecomendaciones.svg";
import ContainerYellowFAQ from "../ContainerYellowFAQ";

const FAQdesktop = () => {
  return (
    <>
      <div className={styles.containerPinkD}>
        <h2>¿Con qué te podemos ayudar?</h2>
        <p>
          A continuación te compartimos una guía de preguntas frecuentes para
          acompañarte en tu paso por esta maravillosa experiencia.
        </p>
      </div>
      <div className={styles.sectionsContainerD}>
        <div className={styles.sectionFAQ}>
          <Link href={"/eventosFAQ"}>
            <Image src={FAQeventos} />
            <h3>Eventos</h3>
            <p>
              Descubre más sobre
              <br />
              nuestra propuesta.
            </p>
          </Link>
        </div>
        <div className={styles.sectionFAQ}>
          <Link href={"/inscripcionesFAQ"}>
            <Image src={FAQinscripciones} />
            <h3>Inscripciones</h3>
            <p>
              Qué hacer para
              <br />
              participar.
            </p>
          </Link>
        </div>
        <div className={styles.sectionFAQ}>
          <Link href={"/recomendacionesFAQ"}>
            <Image src={FAQrecomendaciones} />
            <h3>Recomendaciones</h3>
            <p>
              Tips y consejos para
              <br />
              tu primera cita.
            </p>
          </Link>
        </div>
      </div>
      <ContainerYellowFAQ />
    </>
  );
};

export default FAQdesktop;
