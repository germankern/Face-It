import Button from "../Button";
import styles from "./styles.module.css";

const MainSection = (props) => {
  const main = props.name === "main";

  return (
    <>
      {main ? (
        <div
          className={`${styles.containerMainSection} ${
            props.name === "survey" && styles.backgroundSurvey
          }`}
        >
          <h1>
            Encuentros reales,<br></br>cara a cara y sin filtros.
          </h1>
          <p>Eventos de citas rápidas para solteros.</p>
          <p>Confiable, seguro y divertido</p>
          <Button name={"! Quiero participar !"} />
        </div>
      ) : (
        <div
          className={`${styles.containerMainSection} ${
            props.name === "survey" && styles.backgroundSurvey
          }`}
        >
          <h1>¡Queremos conocerte!</h1>
          <p>
            Completa el formulario con tus datos e intereses para que tengamos
            en cuenta tu perfil.
          </p>
          <p>
            Buscaremos un evento basado en tus respuestas. Luego recibirás
            información de la próxima convocatoria por mail. No te preocupes, el
            proceso sólo te tomará un par de minutos.
          </p>
        </div>
      )}
    </>
  );
};

export default MainSection;
