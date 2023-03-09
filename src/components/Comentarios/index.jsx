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
const ComentariosElement = () => {
  return (
    <div className={styles.containerComentarios}>
      <BlockStyle title={title} parrafo={parrafo}></BlockStyle>
      <UnderlineQuestions question={question} />
      <TextArea title={titleArea} placeHolder={placeHolder} />
      <Button name={nameButton} type={type} />
    </div>
  );
};

export default ComentariosElement;
