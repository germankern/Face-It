import React from "react";
import styles from "./style.module.css";
import ContainerYellowFAQ from "../ContainerYellowFAQ";
import Link from "next/link";

const InscripcionesFAQ = () => {
  return (
    <>
      <div className={styles.inscripcionesContainer}>
        <h2>Inscripciones</h2>
        <h3>¿ Qué incluye la entrada ?</h3>
        <p>
          <b>La entrada incluye el ingreso al evento</b> y la organización del
          mismo, <b>junto con 1 consumición en el bar</b> que puede ser jugo,
          gaseosa, cerveza o trago.
        </p>
        <h3>Costos y medios de pago</h3>
        <p>
          <b>
            El costo de la entrada se informará vía mail al momento de coordinar
            la compra. Se abona por transferencia
          </b>{" "}
          y se puede reservar hasta una semana anterior al evento, pagando el
          total.
        </p>
        <h3>¿ Cómo reservar y cuándo pagar ?</h3>
        <p>
          <b>Para registrarte en lista de espera debes completar</b>{" "}
          <Link href="/survey">el formulario de inscripción </Link>
          de la pantalla principal.
          <br />
          Si tu perfil es acorde al próximo evento, te enviaremos un mail con la
          invitación para que asistas.{" "}
          <b>
            La reserva se realiza una vez abonada la entrada. Puedes pagar desde
            que recibes la invitación hasta una semana anterior a la fecha del
            encuentro.
          </b>
        </p>
        <h3>Cancelaciones y reembolso</h3>
        <p>
          <b>
            Puedes cancelar tu inscripción hasta una semana anterior al evento,
            enviando{" "}
            <a href="mailto:info@faceitcitasrapidas" target={"_blank"}>
              un mail
            </a>{" "}
            con la solicitud.
          </b>{" "}
          Se reembolsará el total del valor de la entrada. Pedimos se nos avise
          lo antes posible para poder invitar a otras personas y mantener la
          cantidad total de participantes en la cita.
        </p>
      </div>
      <ContainerYellowFAQ />
    </>
  );
};

export default InscripcionesFAQ;
