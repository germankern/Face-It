import Image from "next/image";
import styles from "./styles.module.css";
import Facebook from "../../assets/images/Facebook.svg";
import Tiktok from "../../assets/images/TikTok.svg";
import Instagram from "../../assets/images/Instagram.svg";
const Networks = () => {
  return (
    <div className={styles.containerNetworks}>
      <h4>Redes</h4>
      <Image src={Facebook} alt="Facebook" />
      <Image src={Instagram} alt="Instagram" />
      <Image src={Tiktok} alt="Tiktok" />
    </div>
  );
};

export default Networks;
