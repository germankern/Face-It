import Image from "next/image";
import IconLogo from "../../assets/images/IconLogo.svg";
import Logo from "../../assets/images/Logo.svg";

const Brand = (props) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      className={props.name}
    >
      <Image style={{ marginRight: "6px" }} src={IconLogo} alt="IconLogo" />
      <Image src={Logo} alt="Logo" />
    </div>
  );
};

export default Brand;
