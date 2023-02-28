import Image from "next/image";
import HamburgerIcon from "../../assets/images/HamburgerIcon.svg";

const Hamburger = () => {
  return (
    <Image
      style={{ marginLeft: "19px", marginRight: "21px" }}
      src={HamburgerIcon}
      alt="Hamburger"
    />
  );
};

export default Hamburger;
