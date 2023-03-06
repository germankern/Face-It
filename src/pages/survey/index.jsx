import BlockStyle from "@/components/BlockStyle/BlockStyle";
import Button from "@/components/Button";
import ButtonQuestions from "@/components/ButtonsQuestions/ButtonQuestions";
import MainSection from "@/components/MainSection";
import SelectOptions from "@/components/SelectOptions";
import TextArea from "@/components/TextArea";
import UnderlineQuestions from "@/components/UnderlineQuestions";
import {
  questions,
  buttonQuestions,
  textAreaQuestion,
  infoBlockStyle,
} from "./strings";
import styles from "./style.module.css";

const Survey = () => {
  return (
    <>
      <MainSection name="survey" />
      <main className={styles.mainContainer}>
        <h2>Cuéntanos sobre tí</h2>
        <UnderlineQuestions
          question={questions[0].question}
        ></UnderlineQuestions>
        <SelectOptions
          placeHolder={questions[1].placeHolder}
          title={questions[1].question}
          options={questions[1].options}
        ></SelectOptions>
        <UnderlineQuestions
          question={questions[2].question}
          text={questions[2].text}
        />
        <SelectOptions
          placeHolder={questions[3].placeHolder}
          title={questions[3].question}
          options={questions[3].options}
        />
        <UnderlineQuestions question={questions[4].question} />
        <UnderlineQuestions question={questions[5].question} />
        <h2>¿Dónde te encontramos?</h2>
        <SelectOptions
          placeHolder={questions[6].placeHolder}
          title={questions[6].question}
          options={questions[6].options}
        />
        <UnderlineQuestions question={questions[7].question} />
        <Button name="Agregar" span="+" type="survey" />
        <UnderlineQuestions question={questions[8].question} />
        <UnderlineQuestions
          question={questions[9].question}
          placeHolder={questions[9].placeHolder}
        />
        <ButtonQuestions
          title={buttonQuestions[0].title}
          question={buttonQuestions[0].options}
        />
        <ButtonQuestions
          title={buttonQuestions[1].title}
          question={buttonQuestions[1].options}
        />
        <TextArea
          title={textAreaQuestion[0].title}
          placeHolder={textAreaQuestion[0].placeHolder}
        />
        <ButtonQuestions
          title={buttonQuestions[2].title}
          question={buttonQuestions[2].options}
        />
        <ButtonQuestions
          title={buttonQuestions[3].title}
          question={buttonQuestions[3].options}
        />
        <Button name="Enviar" type="submit" />
      </main>
      <BlockStyle
        parrafo={infoBlockStyle[0].parrafo}
        email={infoBlockStyle[0].email}
      />
    </>
  );
};
export default Survey;
