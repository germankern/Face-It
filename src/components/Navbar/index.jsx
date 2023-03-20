import styles from "./styles.module.css";
import Hamburger from "../Hamburger";
import Brand from "../Brand";
import ContainerMenuList from "../ContainerMenuList";
import { useRouter } from "next/router";
import { useState } from "react";
const Navbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState("");
  const isHome = router.pathname === "/" || router.pathname === "/convenios";
  return (
    <>
      <div
        className={`${styles.containerDesktopNavbar} ${
          isHome ? styles.homeNavbarDekstop : " "
        }`}
      >
        <Brand />
        <div className={styles.navbarLinks}>
          <p>Conocenos</p>
          <p>Convenios</p>
          <p>Eventos</p>
          <button type="buttom">Registrarme</button>
        </div>
      </div>
      <div className={styles.containerMobileNavbar}>
        <Hamburger setToggle={setToggle} />
        <Brand />
        <ContainerMenuList toggle={toggle} setToggle={setToggle} />
      </div>
    </>
  );
};

export default Navbar;
