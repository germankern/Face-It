import Image from "next/image";
import styles from "./styles.module.css";
import ArrowDown from "../../assets/images/ArrowDown.svg";
import ArrowUp from "../../assets/images/ArrowUp.svg";
import { useState } from "react";
import { data } from "./strings";
import PlanesDesktop from "../PlanesDesktop";

const PlanesContainer = () => {
  const [selected, setSelected] = useState(null);

  const showAcordeon = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <div className={styles.planesContainer}>
        <h2>Puedes elegir el plan que más se ajuste a lo que necesitas.</h2>
        {data.map((plan, i) => {
          return (
            <div className={styles.desktopPlanes} key={plan.id}>
              <div className={styles.planes} onClick={() => showAcordeon(i)}>
                <div>
                  <h3>{plan.title}</h3>
                  <p>{plan.description}</p>
                </div>
                <div>
                  <Image
                    src={selected === i ? ArrowUp : ArrowDown}
                    alt="menu acordeon"
                  />
                </div>
              </div>
              <div
                className={
                  selected === i
                    ? styles.acordeonMenuShow
                    : styles.acordeonMenuHidden
                }
              >
                <p>{plan.acordeon}</p>
                {plan.servicios.map((plan, i) => (
                  <ul className={styles.infoPlanes}>
                    <li key={i}>{plan}</li>
                  </ul>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.desktop}>
        <PlanesDesktop />
      </div>
      <div className={styles.contactoMail}>
        <p>
          Si quieres saber más, contáctanos:{" "}
          <a href="#">info@faceitcitasrapidas.com</a>
        </p>
      </div>
    </>
  );
};

export default PlanesContainer;
