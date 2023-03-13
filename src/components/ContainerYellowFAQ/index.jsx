import React from "react";
import styles from "./style.module.css";

const ContainerYellowFAQ = () => {
  return (
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
  );
};

export default ContainerYellowFAQ;
