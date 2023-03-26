import Image from "next/image";
import IconLogo from "../../assets/images/IconLogo.svg";
import Logo from "../../assets/images/Logo.svg";
import styles from "./styles.module.css";
import Link from "next/link";

const Brand = (props) => {
  return (
    <div
      className={`
        ${styles.containerBrand}
        ${props.type === "Copyright" && styles.styleContainerCopyright}
        `}
    >
      <Link href={"/"}>
        <Image src={IconLogo} alt="IconLogo" />
        <Image src={Logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Brand;
