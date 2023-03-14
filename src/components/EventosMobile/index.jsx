import Image from "next/image";
import style from "./style.module.css";
import Velas from "../../assets/images/EventosImage01.svg";
import Logo from "../../assets/images/EventosImage02.svg";
import Parejas from "../../assets/images/EventosImage03.svg";
import Mesa from "../../assets/images/EventosImage04.svg";
import Tragos from "../../assets/images/EventosImage05.svg";
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
        <div>
          <Image src={Velas} alt={"vela envendida sobre mesa"} />
        </div>
        <div className={style.carrouselComments}>
          <h3>{strings[currentString]}</h3>
        </div>
        <div>
          <Image src={Logo} alt={"vela envendida sobre mesa"} />
        </div>
        <div className={style.videoGifs}>
          <video autoPlay muted playsInline onEnded={handleVideoEnd}>
            <source src={"/VideoUno.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div>
          <Image src={Parejas} alt={"vela envendida sobre mesa"} />
        </div>
        <div>
          <Image src={Mesa} alt={"vela envendida sobre mesa"} />
        </div>
        <div>
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
