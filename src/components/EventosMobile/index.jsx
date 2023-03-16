import Image from "next/image";
import style from "./style.module.css";
import Velas from "../../assets/images/eventos-01-velas.jpg";
import Brand from "../../assets/images/eventos-02-brand.jpg";
import Parejas from "../../assets/images/eventos-03-parejas.jpg";
import Mesa from "../../assets/images/eventos-04-mesa.jpg";
import Tragos from "../../assets/images/eventos-05-tragos.jpg";
import { useEffect, useState } from "react";
import { strings } from "./strings";

const handleVideoEnd = (event) => {
  event.target.currentTime = 0;
  event.target.play();
};

const EventosMobile = () => {
  const [currentString, setCurrentString] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentString((currentString) => (currentString + 1) % strings.length);
    }, 3500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className={style.sectionEventos}>
        <h2>Nuestros Eventos</h2>
      </div>
      <section className={style.sectionsImg}>
        <div className={style.divImages}>
          <Image src={Velas} alt={"vela envendida sobre mesa"} />
        </div>
        <div className={style.carrouselComments}>
          <h3>{strings[currentString]}</h3>
        </div>
        <div className={style.divImages}>
          <Image src={Brand} alt={"vela envendida sobre mesa"} />
        </div>
        <div className={style.videoGifs}>
          <video autoPlay muted playsInline onEnded={handleVideoEnd}>
            <source src={"/VideoUno.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div className={style.divImages}>
          <Image src={Parejas} alt={"vela envendida sobre mesa"} />
        </div>
        <div className={style.divImages}>
          <Image src={Mesa} alt={"vela envendida sobre mesa"} />
        </div>
        <div className={style.divImages}>
          <Image src={Tragos} alt={"vela envendida sobre mesa"} />
        </div>
        <div className={style.videoGifs}>
          <video autoPlay muted playsInline onEnded={handleVideoEnd}>
            <source src={"/VideoDos.mp4"} type={"video/mp4"} />
          </video>
        </div>
      </section>
    </>
  );
};

export default EventosMobile;
