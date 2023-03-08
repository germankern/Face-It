import styles from "./style.module.css";
import Image from "next/image";
import Flor from "../../assets/images/Flor.jpg";
import Debora from "../../assets/images/Debora.jpg";
import Linea from "../../assets/images/Linea.png";
const FirstSectionAbout = () => {
  return (
    <div className={styles.sectionAbout}>
      <h1>
        Sobre Nosotras
        <span>
          <Image src={Linea} alt="linea" />
        </span>
      </h1>
      <p>
        <b>Somos un equipo de profesionales</b> dedicadas y apasionadas por
        conectar a personas en busca de relaciones significativas y auténticas.
      </p>

      <div className={styles.containerBody}>
        <div className={styles.containerImagesAbout}>
          <Image src={Flor} alt="Flor" width={160} height={178} />
          <Image src={Debora} alt="Debora" width={160} height={178}></Image>
        </div>
        <div className={styles.aboutParagraphs}>
          <p>
            <b>
              {" "}
              <span>Somos</span> Debi y Flor
            </b>
            , dos amigas argentinas que han estado viviendo en Chile hace un
            buen tiempo.{" "}
            <b>Nos conocimos trabajando y de ahí surge esta linda amistad.</b>
          </p>
          <p>
            {" "}
            <span>En</span> una conversación con otras amigas nos dimos cuenta
            que durante esta pandemia casi todos nos encontrábamos más solos,
            con círculos sociales más reducidos, limitados a amigos y compañeros
            de trabajo.
          </p>
          <p>
            <span>Por </span> eso,{" "}
            <b>
              decidimos poner manos a la obra para conectar personas y ayudar a
              que tengan un encuentro seguro con gente que tenga las mismas
              ganas que ellos.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSectionAbout;
