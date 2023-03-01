import styles from "./styles.module.css";
import Hamburger from "../Hamburger";
import Brand from "../Brand";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerDesktopNavbar}>
        <Brand name="container-brand-1"></Brand>
        <div className={styles.navbarLinks}>
          <p>Conocenos</p>
          <p>Convenios</p>
          <p>Eventos</p>
          <button type="buttom">Registrarme</button>
        </div>
      </div>
      <div className={styles.containerMobileNavbar}>
        <Hamburger />
        <Brand name="container-brand-1" />
      </div>
    </>
  );
};

export default Navbar;
