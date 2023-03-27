import BlockStyle from "@/components/BlockStyle/BlockStyle";
import TextSection from "@/components/TextSection/index";
import styles from "./style.module.css";
import { alltext } from "../../strings/terms";

const Survey = () => {
  return (
    <>
      <div className={styles.termsContainer}>
        <div className={styles.introductionContainer}>
          <h1>Terminos y Condiciones</h1>
          <p>
            Estos términos y condiciones describen las reglas y regulaciones
            para el uso del sitio web de Face It! Citas Rápidas, ubicado en
            https://faceitcitasrapidas.com/.
          </p>
          <p>
            Al acceder a este sitio web, asumimos que aceptas estos términos y
            condiciones. No continúes usando Face It! Citas Rápidas si no estás
            de acuerdo con todos los términos y condiciones establecidos en esta
            página.
          </p>
        </div>
        <section className={styles.allTextSection}>
          {alltext.map((section, key) => (
            <TextSection
              key={key}
              type={section.type}
              id={section.id}
              title={section.title}
              allParagraph={section.allParagraph}
              allParagraph2={section.allParagraph2}
              allParagraph3={section.allParagraph3}
              allParagraph4={section.allParagraph4}
              allList={section.allList}
              allList2={section.allList2}
              allList3={section.allList3}
            />
          ))}
        </section>
      </div>
      <BlockStyle
        parrafo="Si quieres saber más, contactanos: "
        email="info@faceitcitasrápidas.com"
      />
    </>
  );
};

export default Survey;
