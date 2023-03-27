import BlockStyle from "../BlockStyle/BlockStyle";
import Button from "../Button";
import TextArea from "../TextArea";
import UnderlineQuestions from "../UnderlineQuestions";
import useForm from "@/hooks/useForm";
import styles from "./style.module.css";
import ModalCompleted from "../ModalCompleted";

import {
  parrafo,
  title,
  question,
  titleArea,
  placeHolder,
  nameButton,
  type,
} from "./string";
import { formService } from "@/utils/formService";
import Stars from "../Stars";
import { useState } from "react";
import SucessMessageComentarios from "../SucessMessageComentarios";
const URL_COMENTARIOS_GOOGLE_SHEET =
  "https://script.google.com/macros/s/AKfycbzIVPL36gKHIwUZJEdzYt3JL82-Hw2PSzb6giDsbFr1OqPwPAlPwkVOSEB3VKlOwLDB/exec";
const ComentariosElement = () => {
  const [score, setScore] = useState(0);
  const [activeModal, setActiveModal] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const initialState = {
    Nombre: "",
    Puntuacion: "",
    Resenha: "",
  };

  const { formData, handleInputChange, handleSubmit, handleAddOption } =
    useForm(initialState, (data) => {
      setLoading(true);
      setError(null);
      try {
        formService.postToGoogleScript(data, URL_COMENTARIOS_GOOGLE_SHEET);
      } catch (error) {
        setError(true);
      }
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    });
  console.log(formData);
  return (
    <div className={styles.containerComentarios}>
      <form onSubmit={handleSubmit}>
        <BlockStyle title={title} parrafo={parrafo}></BlockStyle>
        <div className={styles.containerFormComentarios}>
          <UnderlineQuestions
            question={question}
            name="Nombre"
            data={formData.Nombre}
            onChange={handleInputChange}
          />
          <Stars
            score={score}
            setScore={setScore}
            onChange={handleAddOption}
            name="Puntuacion"
          />
          <TextArea
            title={titleArea}
            placeHolder={placeHolder}
            name="Resenha"
            data={formData.Resenha}
            onChange={handleInputChange}
          />
        </div>

        <Button name={nameButton} type={type} setActiveModal={setActiveModal} />
        {activeModal ? (
          <ModalCompleted>
            <SucessMessageComentarios loading={loading} />
          </ModalCompleted>
        ) : error ? (
          <p className={styles.errorContainer}>
            Disculpas, algo salió mal al enviar el formulario
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default ComentariosElement;
