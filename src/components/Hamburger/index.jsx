import Image from "next/image";
import HamburgerIcon from "../../assets/images/HamburgerIcon.svg";
import styles from "./style.module.css";
const Hamburger = ({ setToggle }) => {
  return (
    <Image
      className={`${styles.hamburger}`}
      onClick={() => setToggle("")}
      src={HamburgerIcon}
      alt="Hamburger"
    />
  );
};

export default Hamburger;
