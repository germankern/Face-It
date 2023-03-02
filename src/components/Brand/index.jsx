import Image from "next/image";
import IconLogo from "../../assets/images/IconLogo.svg";
import Logo from "../../assets/images/Logo.svg";
import styles from "./styles.module.css";

const Brand = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: props.marginRight,
        width: props.width,
        height: props.height,
        justifyContent: props.justifyContent,
      }}
      className={styles.containerBrand}
    >
      <Image style={{ marginRight: "6px" }} src={IconLogo} alt="IconLogo" />
      <Image src={Logo} alt="Logo" />
    </div>
  );
};

export default Brand;
