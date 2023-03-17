import styles from "./style.module.css";
import Image from "next/image";
import Honestidad from "../../assets/images/Honestidad.png";
import Empatia from "../../assets/images/Empatia.png";
import Seguridad from "../../assets/images/Seguridad.png";
import SecondSectionAboutDesktop from "../SecondSectionAboutDesktop";

const SecondSectionAbout = () => {
  return (
    <>
      <div className={styles.sectionAboutSecond}>
        <h2>Nuestros valores</h2>
        <p>
          Estamos comprometidas con la promoción de relaciones auténticas y
          significativas entre personas. Para lograr esto, nos regimos por tres
          valores fundamentales y escenciales:
        </p>
        <div id={styles._0} className={styles.itemSecondSection}>
          <div className={styles.containerItemImage}>
            <Image src={Honestidad} alt="Honestidad"></Image>
          </div>
          <div className={styles.itemParagraph}>
            <p>
              <b>Consideramos fundamental proporcionar tranquilidad</b> a todas
              las personas que participan en nuestros eventos. Por este motivo,
              <b>nos bresforzamos por ser lo más transparentes posible</b> en
              cuanto a la información sobre los encuentros y el tratamiento de
              los datos.
            </p>
          </div>
        </div>

        <div id={styles._1} className={styles.itemSecondSection}>
          <div className={styles.itemParagraph}>
            <p>
              Somos conscientes de que conocer personas nuevas puede generar
              ciertas expectativas. Por esta razón, en{" "}
              <b>
                nuestros eventos nos guiamos por la empatía y con la premisa de
                crear un ambiente ameno y agradable para todos los
                participantes.
              </b>
            </p>
          </div>
          <div className={styles.containerItemImage}>
            <Image src={Empatia} alt="Empatia"></Image>
          </div>
        </div>

        <div id={styles._2} className={styles.itemSecondSection}>
          <div className={styles.containerItemImage}>
            <Image src={Seguridad} alt="Seguridad"></Image>
          </div>

          <div className={styles.itemParagraph}>
            <p>
              Nos esforzamos por crear eventos en lugares y momentos que
              ofrezcan la mayor tranquilidad posible. Para lograrlo,{" "}
              <b>
                seleccionamos cuidadosamente los bares donde se realizan
                nuestros eventos y los revisamos previamente
              </b>
              , garantizando así la seguridad de nuestros asistentes.
            </p>
          </div>
        </div>
      </div>

      <SecondSectionAboutDesktop />
    </>
  );
};

export default SecondSectionAbout;
