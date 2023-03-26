import styles from "./styles.module.css";
import Hamburger from "../Hamburger";
import Brand from "../Brand";
import ContainerMenuList from "../ContainerMenuList";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState("");
  const isHome =
    router.pathname === "/" ||
    router.pathname === "/convenios" ||
    router.pathname === "/eventos";
  return (
    <>
      <div
        className={`${styles.containerDesktopNavbar} ${
          isHome ? styles.homeNavbarDekstop : " "
        }`}
      >
        <Brand />
        <div className={styles.navbarLinks}>
          <Link href={"/sobrenosotras"}>
            <p>Conocenos</p>
          </Link>
          <Link href={"/convenios"}>
            <p>Convenios</p>
          </Link>
          <Link href={"/eventos"}>
            <p>Eventos</p>
          </Link>
          <Link href={"/survey"}>
            <button type="buttom">Registrarme</button>
          </Link>
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
