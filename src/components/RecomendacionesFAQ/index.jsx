import React from "react";
import styles from "./style.module.css";
import ContainerYellowFAQ from "../ContainerYellowFAQ";

const RecomendacionesFAQ = () => {
  return (
    <>
      <div className={styles.recomendacionesContainer}>
        <h2>Recomendaciones</h2>
        <h3>Cómo prepararse para la cita</h3>
        <p>
          La puntualidad es importante.
          <br />
          <b>Aconsejamos llegar a horario al evento.</b>
          Recuerda que las citas son cortas, y los participantes están esperando
          para conocerte.
          <br />
          Ten en cuenta que la inscripción es personal, por lo que{" "}
          <b>
            solo se admitirá el ingreso de quien haya recibido invitación y
            abonado la entrada.
          </b>
        </p>
        <p>
          <b>Una buena primera impresión puede hacer maravillas.</b> Muéstrate
          tal cual eres.{" "}
          <b>No es necesario respetar un código de vestimenta en particular,</b>{" "}
          pero es aconsejable cuidar tu aspecto e higiene para causar una buena
          impresión.
          <br />
          También aconsejamos tener preparadas algunas preguntas o comentarios
          divertidos para{" "}
          <b>
            diferenciarte del resto de los participantes y mantener una
            conversación cálida y fluída.
          </b>
        </p>
        <p className={styles.actitudPositiva}>
          Mantén una actitud positiva, ¡te va a ir genial!
        </p>
      </div>
      <ContainerYellowFAQ />
    </>
  );
};

export default RecomendacionesFAQ;
