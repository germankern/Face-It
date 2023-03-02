import Image from "next/image";
import styles from "./styles.module.css";
import ArrowDown from "../../assets/images/ArrowDown.svg";
import { useState } from "react";

const PlanesContainer = () => {
  const data = [
    {
      id: 1,
      title: "Plan básico",
      description: "Logo, paleta de colores y set básico.",
      acordeon:
        "Donde le facilitamos el logo, paleta de colores y el set básico para poder usar la marca Face It.",
    },
    {
      id: 2,
      title: "Plan profesional",
      description: "Asesoría en organización de eventos.",
      acordeon:
        "Una asesoría donde explicamos el método que usamos para organizar los eventos, incluyendo el tono que usamos en los mensajes, etc… En el caso que quiera iniciar este tipo de eventos con una marca propia que no sea Face It!",
    },
    {
      id: 3,
      title: "Plan premium",
      description: "Set básico y asesorías.",
      acordeon:
        "La propuesta que combina las 2 anteriores, que incluye además de la marca, todos los contenidos que fuimos publicando para que tenga material para adaptarlo a su país (si hace falta) para que sólo tenga que programar el contenido en las redes sociales.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const showAcordeon = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className={styles.planesContainer}>
      <h2>Puedes elegir el plan que más se ajuste a lo que necesitas.</h2>
      {data.map((item, i) => {
        return (
          <div key={item.id}>
            <div className={styles.planes} onClick={() => showAcordeon(i)}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div>
                <Image src={ArrowDown} alt="menu acordeon"></Image>
              </div>
            </div>
            <div
              className={
                selected === i
                  ? styles.acordeonMenuShow
                  : styles.acordeonMenuHidden
              }
            >
              <p>{item.acordeon}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanesContainer;
