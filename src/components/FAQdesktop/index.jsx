import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import FAQeventos from "../../assets/images/FAQeventos.svg";
import FAQinscripciones from "../../assets/images/FAQinscripciones.svg";
import FAQrecomendaciones from "../../assets/images/FAQrecomendaciones.svg";
// import { useState } from "react";
// import { info } from "./strings";

const FAQdesktop = () => {
  // const [selected, setSelected] = useState(null);

  // const showAcordeon = (i) => {
  //   if (selected == i) {
  //     return setSelected(null);
  //   }

  //   setSelected(i);
  // };

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
          <Link href={"/convenios"}>
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
          <Link href={"/convenios"}>
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
          <Link href={"/convenios"}>
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
      <div className={styles.containerYellowD}>
        <h4>¿No encontraste lo que estabas buscando?</h4>
        <p>
          Envía tu consulta a{" "}
          <a href="https://twitter.com" target={"_blank"}>
            info@faceitcitasrápidas.com
          </a>{" "}
          para que podamos responder tus dudas.
        </p>
      </div>
    </>
  );
};

export default FAQdesktop;
