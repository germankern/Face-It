import Event from "../Event";
import Image from "next/image";
import krossbar from "../../assets/images/krossbar-image.png";
import meet from "../../assets/images/meet-image.png";
import cofradia from "../../assets/images/cofradia-image.jpg";
import lagerhouse from "../../assets/images/lagerhouse-image.jpg";
import styles from "./styles.module.css";
import Link from "next/link";

const events = [
  {
    title: "Krossbar",
    image: krossbar,
    alt: "krossbar image",
    parrafo: "Santiago de Chile",
  },
  {
    title: "Cofradía",
    image: cofradia,
    alt: "cofradia image",
    parrafo: "Santiago de Chile",
  },
  {
    title: "Lagerhaus",
    image: lagerhouse,
    alt: "lagerhause image",
    parrafo: "Santiago de Chile",
  },
];

const EventContainer = () => {
  return (
    <div className={styles.eventContainer}>
      <div className={`${styles.coupleContainer} ${styles.coupleStyle}`}>
        <Image
          src={meet}
          alt="couple meeting"
          className={styles.coupleStyle2}
        />
        <Link href={"/eventos"}>
          <h2 className={styles.titleStyle}>
            Conoce Nuestros Eventos e inscríbite
          </h2>
        </Link>
      </div>
      <div className={styles.eventListContainer}>
        {events.map((item, index) => (
          <Event
            key={index}
            title={item.title}
            image={item.image}
            alt={item.alt}
            parrafo={item.parrafo}
          ></Event>
        ))}
      </div>
    </div>
  );
};

export default EventContainer;
