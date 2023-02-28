import Event from "../Event";
import Image from "next/image";
import krossbar from "../../assets/images/krossbar-image.png";
import meet from "../../assets/images/meet-image.png";
import cofradia from "../../assets/images/cofradia-image.jpg";
import lagerhouse from "../../assets/images/lagerhouse-image.jpg";
import styles from "./styles.module.css";

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
    title: "Lagerhause",
    image: lagerhouse,
    alt: "lagerhause image",
    parrafo: "Santiago de Chile",
  },
];
const copupleStyle = {
  width: "358px",
  height: "150px",
  borderTopLeftRadius: "20px",
  overflow: "hidden",
  position: "relative",
  margin: "0 auto",
};

const copupleStyle2 = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "bottom -10px right 50%",
};

const titleStyle = {
  position: "absolute",
  background: "rgba(255, 206, 0, 1)",
  width: "100%",
  height: "35px",
  top: "115px",
  textAlign: "center",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "35px",
};

const EventContainer = () => {
  return (
    <div className={styles.eventContainer}>
      <div className={styles.coupleContainer} style={copupleStyle}>
        <Image src={meet} alt="couple meeting" style={copupleStyle2} />
        <h2 style={titleStyle}>Conoce Nuestros Eventos e inscríbite</h2>
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
