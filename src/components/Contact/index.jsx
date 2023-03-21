import Image from "next/image";
import Correo from "../../assets/images/Correo.svg";
import Whatssap from "../../assets/images/Whatssap.svg";
import styles from "./styles.module.css";
import Correo2 from "../../assets/images/correoWhite.svg";
import Whatssap2 from "../../assets/images/whatssapWhite.svg";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  const eventos = router.pathname === "/eventos";
  const CorreroImageSrc = eventos ? Correo2 : Correo;
  const WhatssapImageSrc = eventos ? Whatssap2 : Whatssap;
  return (
    <>
      <div className={styles.contactContainer}>
        <p className={styles.title}>Contacto</p>
        <Image src={CorreroImageSrc} alt="Correo" />
        <p className={styles.correo}>info@faceitcitasrapidas</p>
        <Image src={WhatssapImageSrc} alt="Whatssap" />
        <p className={styles.whatssap}>011 11 1111-1111</p>
      </div>
    </>
  );
};

export default Contact;
