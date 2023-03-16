import styles from "./style.module.css";
import Image from "next/image";
import imageSuccess from "../../assets/images/SucessImage.jpg";
import Button from "../Button";
import { ClapSpinner } from "react-spinners-kit";

import { useEffect, useState } from "react";
const SucessMessage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <div className={styles.containerSucessMessage}>
        {loading ? (
          <ClapSpinner
            size={50}
            frontColor="#fff"
            backColor="#E05AA0"
            loading={loading}
          />
        ) : (
          <>
            <h1>¡Gracias por unirte!</h1>
            <p>
              Buscaremos un evento basado en tus respuestas. Luego recibirás
              información
            </p>
            <p>de la próxima convocatoria por mail.</p>
            <Image src={imageSuccess} alt="imageSucess"></Image>

            <Button name={"Volver"} type={"button"}></Button>
          </>
        )}
      </div>
    </>
  );
};

export default SucessMessage;
