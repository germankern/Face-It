import styles from "./styles.module.css";
import BlockStyle from "@/components/BlockStyle/BlockStyle";
import TextSection from "@/components/TextSection/index";
import { alltext } from "../../strings/politicas";

const PolitcasPrivacidad = () => {
  return (
    <>
      <div className={styles.politContainer}>
        <div className={styles.introductionContainer}>
          <h1>Políticas de privacidad</h1>
          <p>
            El sitio web Face It! Citas Rápidas es propiedad de Face It! Citas
            Rápidas, que es un controlador de datos de tus datos personales.
            Hemos adoptado esta Política de privacidad, que determina cómo
            procesamos la información recopilada por Face It! Citas Rápidas, que
            también proporciona las razones por las que debemos recopilar
            ciertos datos personales sobre ti. Por lo tanto, debes leer esta
            Política de privacidad antes de usar el sitio web de Face It! Citas
            Rápidas.
          </p>
          <p>
            Cuidamos tus datos personales y nos comprometemos a garantizar su
            confidencialidad y seguridad.
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
              allList={section.allList}
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
export default PolitcasPrivacidad;
