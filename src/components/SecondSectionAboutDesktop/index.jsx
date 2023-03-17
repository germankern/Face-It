import styles from "./style.module.css";
import Image from "next/image";
import Honestidad from "../../assets/images/Honestidad1.png";
import Empatia from "../../assets/images/Empatia1.png";
import Linea from "../../assets/images/Linea2.png";
import Seguridad from "../../assets/images/Seguridad1.png";
import { useState } from "react";
const SecondSectionAboutDesktop = () => {
  const [description, setdescription] = useState("");
  return (
    <div className={styles.sectionAboutSecondDesktop}>
      <div className={styles.containerDescription}>
        <h2>
          {" "}
          <span>
            <Image src={Linea} alt="linea" />
          </span>
          Nuestros valores
        </h2>
        <p>
          Estamos comprometidas con la promoción de relaciones auténticas y
          significativas entre personas. Para lograr esto, nos regimos por tres
          valores fundamentales y escenciales:
        </p>
        <div className={styles.containerItemImage} id={styles._2}>
          <Image
            src={Honestidad}
            alt="Honestidad"
            onMouseEnter={() => setdescription("honestidad")}
            onMouseLeave={() => setdescription("")}
          ></Image>
        </div>
        <div className={styles.containerItemImage} id={styles._3}>
          <Image
            src={Empatia}
            alt="Empatia"
            onMouseEnter={() => setdescription("empatia")}
            onMouseLeave={() => setdescription("")}
          ></Image>
        </div>
        <div className={styles.containerItemImage} id={styles._4}>
          <Image
            src={Seguridad}
            alt="Seguridad"
            onMouseEnter={() => setdescription("seguridad")}
            onMouseLeave={() => setdescription("")}
          ></Image>
        </div>

        <div className={styles.showDescription}>
          <p
            className={`${styles.hoverDescription} ${
              description === "honestidad" ? styles[description] : " "
            }`}
          >
            <b>Consideramos fundamental proporcionar tranquilidad</b> a todas
            las personas que participan en nuestros eventos. Por este motivo,
            <b>nos esforzamos por ser lo más transparentes posible </b>en cuanto
            a la información sobre los encuentros y el tratamiento de los datos.
          </p>
          <p
            className={`${styles.hoverDescription} ${
              description === "empatia" ? styles[description] : " "
            }`}
          >
            Somos conscientes de que conocer personas nuevas puede generar
            ciertas expectativas. Por esta razón,{" "}
            <b>
              en nuestros eventos nos guiamos por la empatía y con la premisa de
              crear un ambiente ameno y agradable para todos los participantes.
            </b>
          </p>
          <p
            className={`${styles.hoverDescription} ${
              description === "seguridad" ? styles[description] : " "
            }`}
          >
            Nos esforzamos por crear eventos en lugares y momentos que ofrezcan
            la mayor tranquilidad posible. Para lograrlo,{" "}
            <b>
              seleccionamos cuidadosamente los bares donde se realizan nuestros
              eventos y los revisamos previamente
            </b>
            , garantizando así la seguridad de nuestros asistentes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionAboutDesktop;
