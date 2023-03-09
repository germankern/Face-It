import Image from "next/image";
import styles from "./styles.module.css";
import { data } from "./strings";
import { useState } from "react";

const PlanesDesktop = () => {
  const [showMoreIndex, setShowMoreIndex] = useState(-1);

  const verMas = (i) => {
    setShowMoreIndex(i);
  };

  return (
    <div className={styles.planesDesktop}>
      {data.map((plan, i) => {
        return (
          <div className={styles.planDesktop} key={i}>
            <Image alt={plan.title} src={plan.img} width={73} height={114} />
            <h2>{plan.title}</h2>
            <p>{plan.description}</p>
            <ul className={styles.listPlan}>
              {plan.servicios.map((servicio, i) => (
                <li key={i}>{servicio}</li>
              ))}
              {showMoreIndex === i &&
                plan.verMas.map((mas, i) => <li key={i}>{mas}</li>)}
            </ul>
            <div className={styles.containerBtn}>
              {plan.button ? (
                <button
                  onClick={() => verMas(i)}
                  className={
                    showMoreIndex === i ? styles.hiddenBtn : styles.btnVerMas
                  }
                >
                  {plan.button}
                </button>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanesDesktop;
