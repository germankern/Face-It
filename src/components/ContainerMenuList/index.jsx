import styles from "./style.module.css";
import menulist from "../../assets/images/MenuListNavbar.png";
import Image from "next/image";
import Link from "next/link";

const ContainerMenuList = ({ toggle, setToggle }) => {
  return (
    <div
      className={`${styles.containerMenuList} ${toggle ? styles[toggle] : " "}`}
    >
      <a href="#">
        <Image
          width="296"
          height="64"
          src={menulist}
          alt="MenuList"
          onClick={() => setToggle("toggle")}
        />
      </a>
      <ul className={styles.menuListItems}>
        <Link href="/survey">
          <li>Registrarme</li>
        </Link>
        <Link href="/sobrenosotras">
          <li>Conócenos</li>
        </Link>
        <Link href="/convenios">
          <li>Convenios</li>
        </Link>
        <Link href="/eventos">
          <li>Eventos</li>
        </Link>
        <Link href="/faq">
          <h3>Preguntas frecuentes</h3>
        </Link>
        <li>Legales</li>
        <Link href="/terms">
          <li>Terminos y Condiciones</li>
        </Link>
        <Link href="/politicas">
          <h3>Políticas de privacidad</h3>
        </Link>
        <Link href="/comentarios">
          <li>Dejanos tu comentario</li>
        </Link>
      </ul>
    </div>
  );
};

export default ContainerMenuList;
