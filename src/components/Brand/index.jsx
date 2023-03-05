import Image from "next/image";
import IconLogo from "../../assets/images/IconLogo.svg";
import Logo from "../../assets/images/Logo.svg";
import styles from "./styles.module.css";

const Brand = (props) => {
  return (
    <div
      className={`
        ${styles.containerBrand}
        ${props.type === "Copyright" && styles.styleContainerCopyright}
        `}
    >
      <Image style={{ marginRight: "6px" }} src={IconLogo} alt="IconLogo" />
      <Image src={Logo} alt="Logo" />
    </div>
  );
};

export default Brand;
