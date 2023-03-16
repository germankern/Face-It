import BlockStyle from "@/components/BlockStyle/BlockStyle";
import FirstSectionAbout from "@/components/FirstSectionAbout";
import SecondSectionAbout from "@/components/SecondSectionAbout";
import styles from "./style.module.css";
const SobreNosotras = () => {
  const itemParagraph =
    "Es así como nace Face It! Nuestra misión es generar espacios de encuentros para solteros para que puedan conocer gente nueva, hacer amistades y/o encontrar el amor. Nos comprometemos a crear un ambiente seguro, inclusivo y acogedor para que todos puedan conectarse y relacionarse de manera auténtica.";
  const itemParagraphBold =
    "Nuestra misión es generar espacios de encuentros para solteros para que puedan conocer gente nueva, hacer amistades y/o encontrar el amor. ";
  return (
    <div className={styles.containerSobreNosotras}>
      <FirstSectionAbout />
      <BlockStyle parrafo={itemParagraph} bold={itemParagraphBold} />
      <SecondSectionAbout />
      <BlockStyle
        parrafo="Si quieres saber más, contactanos:"
        email="info@faceitcitasrápidas.com"
      />
    </div>
  );
};

export default SobreNosotras;
