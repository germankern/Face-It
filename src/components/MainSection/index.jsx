import Button from "../Button";
import styles from "./styles.module.css";

const MainSection = () => {
  return (
    <div className={styles.containerMainSection}>
      <h1>
        Encuentros reales,<br></br>cara a cara y sin filtros.
      </h1>
      <p>Eventos de citas rápidas para solteros.</p>
      <p>Confiable,seguro y divertido</p>
      <Button name={"Quiero Participar!"}></Button>
    </div>
  );
};

export default MainSection;
