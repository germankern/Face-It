import BlockStyle from "../BlockStyle/BlockStyle";
import Button from "../Button";
import TextArea from "../TextArea";
import UnderlineQuestions from "../UnderlineQuestions";
import styles from "./style.module.css";
import {
  parrafo,
  title,
  question,
  titleArea,
  placeHolder,
  nameButton,
  type,
} from "./string";
import Stars from "../Stars";
import { useState } from "react";

const ComentariosElement = () => {
  const [score, setScore] = useState(0);
  return (
    <div className={styles.containerComentarios}>
      <BlockStyle title={title} parrafo={parrafo}></BlockStyle>
      <div className={styles.containerFormComentarios}>
        <UnderlineQuestions question={question} />
        <Stars score={score} setScore={setScore} />
        <TextArea title={titleArea} placeHolder={placeHolder} />
      </div>

      <Button name={nameButton} type={type} />
    </div>
  );
};

export default ComentariosElement;
