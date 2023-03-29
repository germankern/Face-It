import styles from "./style.module.css";
import arrow from "../../assets/images/Atras.svg";
import logo from "../../assets/images/LogoNavbarSmall.svg";
import Image from "next/image";
import Link from "next/link";

const ContainerMenuList = ({ toggle, setToggle }) => {
  return (
    <div
      className={`${styles.containerMenuList} ${
        toggle != "" ? styles[toggle] : " "
      }`}
    >
      <div className={styles.containerImageNavbar}>
        <Image
          width="28"
          height="28"
          src={arrow}
          alt="MenuList"
          onClick={() => setToggle("toggle")}
        />
        <Image
          width="120"
          height="31"
          src={logo}
          alt="MenuList"
          onClick={() => setToggle("toggle")}
        />
      </div>
      <ul className={styles.menuListItems}>
        <li
          onClick={() => {
            setToggle("toggle");
          }}
        >
          <Link href="/survey">Registrarme </Link>
        </li>

        <li
          onClick={() => {
            setToggle("toggle");
          }}
        >
          <Link href="/sobrenosotras">Conócenos</Link>
        </li>

        <li
          onClick={() => {
            setToggle("toggle");
          }}
        >
          <Link href="/convenios">Convenios</Link>
        </li>

        <li
          onClick={() => {
            setToggle("toggle");
          }}
        >
          <Link href="/eventos">Eventos</Link>
        </li>

        <h3
          onClick={() => {
            setToggle("toggle");
          }}
        >
          <Link href="/faq">Preguntas frecuentes</Link>
        </h3>

        <h2>Legales</h2>

        <li
          className={styles.widthLi}
          onClick={() => {
            setToggle("toggle");
          }}
        >
          <Link href="/terms">Terminos y Condiciones</Link>
        </li>

        <h3
          onClick={() => {
            setToggle("toggle");
          }}
        >
          <Link href="/politicas">Políticas de privacidad</Link>
        </h3>

        <li
          onClick={() => {
            setToggle("toggle");
          }}
        >
          <Link href="/comentarios">Dejanos tu comentario</Link>
        </li>
      </ul>
    </div>
  );
};

export default ContainerMenuList;
