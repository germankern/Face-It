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

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/faceitcitasrapidas/", "_blank");
  };
  const handleTiktokClick = () => {
    window.open("https://www.tiktok.com/", "_blank");
  };

  return (
    <div className={styles.containerNetworks}>
      <h4>Redes</h4>
      <Image
        src={FacebookImageSrc}
        alt="Facebook logo"
        onClick={handleFacebookClick}
      />
      <Image
        src={InstagramImageSrc}
        alt="Instagram logo"
        onClick={handleInstagramClick}
      />
      <Image
        src={TiktokImageSrc}
        alt="Tiktok logo"
        onClick={handleTiktokClick}
      />
    </div>
  );
};

export default Networks;
