import Image from "next/image";
import Correo from "../../assets/images/Correo.svg";
import Whatssap from "../../assets/images/Whatssap.svg";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <p className={styles.title}>Contacto</p>
      <Image src={Correo} alt="Correo" />
      <p className={styles.correo}>info@faceitcitasrapidas</p>
      <Image src={Whatssap} alt="Whatssap" />
      <p className={styles.whatssap}>011 11 1111-1111</p>
    </div>
  );
};

export default Contact;
