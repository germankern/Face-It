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
  const eventos = router.pathname === "/eventos";
  const FacebookImageSrc = eventos ? Facebook2 : Facebook;
  const InstagramImageSrc = eventos ? Instagram2 : Instagram;
  const TiktokImageSrc = eventos ? Tiktok2 : Tiktok;
  return (
    <div className={styles.containerNetworks}>
      <h4>Redes</h4>
      <Image src={FacebookImageSrc} alt="Facebook" />
      <Image src={InstagramImageSrc} alt="Instagram" />
      <Image src={TiktokImageSrc} alt="Tiktok" />
    </div>
  );
};

export default Networks;
