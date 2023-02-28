import styles from "./styles.module.css";
import Hamburger from "../Hamburger";
import Brand from "../Brand";

const Navbar1 = () => {
  return (
    <div
      style={{
        background: "black",
        display: "flex",
        alignItems: "center",
        height: "56px",
      }}
    >
      <Hamburger />
      <Brand name="container-brand-1" />
    </div>
  );
};

const Navbar2 = () => {
  return (
    <div className={styles.containerDesktopNavbar}>
      <Brand name="container-brand-1"></Brand>
      <div className={styles.navbarLinks}>
        <p>Conocenos</p>
        <p>Convenios</p>
        <p>Eventos</p>
        <button type="buttom">Registrarme</button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const width = 1024; // Usar css
  return <>{width > 768 ? <Navbar2 /> : <Navbar1 />}</>;
};

export default Navbar;
