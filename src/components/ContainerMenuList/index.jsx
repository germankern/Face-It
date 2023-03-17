import styles from "./style.module.css";
import menulist from "../../assets/images/MenuListNavbar.png";
import Image from "next/image";

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
        <li>Registrarme</li>
        <li>Conócenos</li>
        <li>Convenios</li>
        <li>Eventos</li>
        <h3>Preguntas frecuentes</h3>
        <li>Legales</li>
        <li>Terminos y Condiciones</li>
        <h3>Políticas de privacidad</h3>
        <li>Dejanos tu comentario</li>
      </ul>
    </div>
  );
};

export default ContainerMenuList;
