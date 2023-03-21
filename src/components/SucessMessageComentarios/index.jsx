import styles from "./style.module.css";
import Image from "next/image";
import imageSuccess from "../../assets/images/ImagenCara.jpg";
import Button from "../Button";
import { ClapSpinner } from "react-spinners-kit";

const SucessMessageComentarios = ({ loading }) => {
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
          <div className={styles.popupContainerStyle}>
            <h1>¡Gracias por tu comentario!</h1>
            <p>
              Tendremos en cuenta tu reseña para seguir mejorando en cada
              evento.
            </p>

            <Image src={imageSuccess} alt="imageSucess"></Image>

            <Button name={"Volver"} type={"button"}></Button>
          </div>
        )}
      </div>
    </>
  );
};

export default SucessMessageComentarios;
