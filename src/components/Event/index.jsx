import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const Parrafo = (props) => {
  return <p className={styles.containerEventParagraph}>{props.parrafo}</p>;
};

const Event = (props) => {
  const width = 1024; // Usar css
  return (
    <div className={styles.eventImageEventStyle}>
      <Link href={"/eventos"}>
        <Image src={props.image} alt={props.alt} />
        <h3>{props.title}</h3>
        {width > 768 ? <Parrafo parrafo={props.parrafo} /> : ""}
      </Link>
    </div>
  );
};

export default Event;
