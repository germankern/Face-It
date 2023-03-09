import Image from "next/image";
import styles from "./styles.module.css";
import ArrowDown from "../../assets/images/ArrowDown.svg";
import ArrowUp from "../../assets/images/ArrowUp.svg";
import { useState } from "react";
import { info } from "./strings";

const FAQmobile = () => {
  const [selected, setSelected] = useState(null);

  const showAcordeon = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <div className={styles.containerPink}>
        <h2>
          ¿Con qué te podemos <br />
          ayudar?
        </h2>
        <p>
          A continuación te compartimos una guía de preguntas frecuentes para
          acompañarte en tu paso por esta maravillosa experiencia.{" "}
        </p>
      </div>
      <div className={styles.sectionsContainer}>
        {info.map((section, i) => {
          return (
            <div className={styles.sectionAcordeon}>
              <div onClick={() => showAcordeon(i)}>
                <h3>{section.title}</h3>
                <div className={styles.acordeonImg}>
                  <Image
                    src={selected === i ? ArrowUp : ArrowDown}
                    alt="menú acordeon"
                  />
                </div>
                <h4 className={styles.acordeonH4}>{section.subtile}</h4>
                <div
                  className={selected === i ? styles.showInfo : styles.hidden}
                >
                  <div>{section.acordeonInfo}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.containerYellow}>
        <h4>¿No encontraste lo que estabas buscando?</h4>
        <p>
          Envía tu consulta a <br />
          <b>info@faceitcitasrápidas.com</b> para que podamos responder tus
          dudas.
        </p>
      </div>
    </>
  );
};

export default FAQmobile;
