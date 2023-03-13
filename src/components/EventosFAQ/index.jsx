import React from "react";
import ContainerYellowFAQ from "../ContainerYellowFAQ";
import styles from "./style.module.css";

const EventosFAQ = () => {
  return (
    <>
      <div className={styles.eventosContainer}>
        <h2>Eventos</h2>
        <h3>Qué son las citas rápidas</h3>
        <p>
          <b>
            Este sistema de citas consta de un encuentro presencial previamente
            organizado para conocer gente nueva de forma rápida,
          </b>
          <br />
          categorizado por grupos de edad similar.
          <br />
          En los eventos, cada persona completa un formulario con datos e
          intereses.{" "}
          <b>
            Luego se disponen 2 rondas de charlas entre parejas, de
            <br />5 minutos cada una.
            <br />
            Al finalizar el tiempo suena un timbre y todos los participantes
            deben cambiar de pareja.
          </b>{" "}
          El ciclo se repite hasta que todos los participantes se conozcan entre
          sí.
          <br />
          Cuando termina el encuentro, cada persona puede informar al
          coordinador a quién desea volver a ver,{" "}
          <b>
            y se comparten los datos de cada contacto luego de evaluar las
            coincidencias.
          </b>
        </p>
        <h3>Dónde son los eventos</h3>
        <p>
          <b>
            Actualmente los encuentros son únicamente en las ciudades de
            Santiago y Viña del Mar, Chile. Se llevan a cabo en bares
            concurridos,
          </b>{" "}
          que son previamente reservados para las citas.
          <br />
          El objetivo de realizar los eventos en lugares públicos es cuidar la
          seguridad de los participantes, ya que todos se encuentran por primera
          vez en el evento.
        </p>
        <div className={styles.linksEvent}>
          <a>Mostrar encuentros anteriores</a>
        </div>
        <h3>Cómo contactar nuevamente a un participante</h3>
        <p>
          Al finalizar el evento puedes informar al organizador con qué
          participantes deseas seguir en contacto.{" "}
          <b>
            El personal te entregará los datos de contacto de la otra persona
            únicamente si hay coincidencia, para mantener la seguridad.
          </b>
        </p>
      </div>
      <ContainerYellowFAQ />
    </>
  );
};

export default EventosFAQ;
