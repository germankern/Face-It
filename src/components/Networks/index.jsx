import Image from "next/image";
import styles from "./styles.module.css";
import Facebook from "../../assets/images/Facebook.svg";
import Tiktok from "../../assets/images/TikTok.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Facebook2 from "../../assets/images/facebookWhite.svg";
import Tiktok2 from "../../assets/images/titokWhite.svg";
import Instagram2 from "../../assets/images/instagramWhite.svg";
import { useRouter } from "next/router";
const Networks = () => {
  const router = useRouter();
  const eventos = router.pathname === "/eventos" ? true : false;
  return (
    <>
      {eventos ? (
        <div className={styles.containerNetworks}>
          <h4>Redes</h4>
          <Image src={Facebook2} alt="Facebook" />
          <Image src={Instagram2} alt="Instagram" />
          <Image src={Tiktok2} alt="Tiktok" />
        </div>
      ) : (
        <div className={styles.containerNetworks}>
          <h4>Redes</h4>
          <Image src={Facebook} alt="Facebook" />
          <Image src={Instagram} alt="Instagram" />
          <Image src={Tiktok} alt="Tiktok" />
        </div>
      )}
    </>
  );
};

export default Networks;
