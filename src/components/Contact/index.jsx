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
        <a
          className={styles.correo}
          href="mailto:info@faceitcitasrapidas"
          target={"_blank"}
        >
          info@faceitcitasrapidas
        </a>
        <Image src={WhatssapImageSrc} alt="Whatssap" />
        <a
          className={styles.whatssap}
          href="https://wa.me/+56930879581"
          target={"_blank"}
        >
          +56 9 30879581
        </a>
      </div>
    </>
  );
};

export default Contact;
