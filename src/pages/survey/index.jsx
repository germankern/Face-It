<<<<<<< HEAD
import BlockStyle from "@/components/BlockStyle/BlockStyle";
import Button from "@/components/Button";
import ButtonQuestions from "@/components/ButtonsQuestions/ButtonQuestions";
import MainSection from "@/components/MainSection";
import SelectOptions from "@/components/SelectOptions";
import TextArea from "@/components/TextArea";
import UnderlineQuestions from "@/components/UnderlineQuestions";
import styles from "./style.module.css";

const questions = [
  {
    question: "Mi nombre completo es",
    placeHolder: "",
  },
  {
    question: "Me identifico con el género",
    placeHolder: "Masculino",
    options: ["Femenino", "Masculino"],
  },
  {
    question: "Mi edad es",
    placeHolder: "",
    text: "años",
  },
  {
    question: "Mi estado civil es",
    placeHolder: "Soltero",
    options: ["Soltero", "Casado"],
  },
  {
    question: "Mi nacionalidad es",
    placeHolder: "",
  },
  {
    question: "Acutalmente vivo en la ciduad de",
    placeHolder: "",
  },
  {
    default: "Instagram",
    placeHolder: "Facebook",
    options: ["Facebook", "Instagram", "Tiktok", "Twitter"],
  },
  {
    question: "Mi usuario es",
    placeHolder: "",
  },
  {
    question: "Mi correo electronico es",
    placeHolder: "",
  },
  {
    question: "Mi telefono es",
    placeHolder: "+56 011 1111-1111",
  },
];

const buttonQuestions = [
  {
    title: "¿Cúal es tu orientación sexual",
    options: {
      0: "Heterosexual",
      1: "Homosexual",
      2: "Bisexual",
      3: "Otro",
    },
  },
  {
    title: "¿Qué te trae por aqui",
    options: {
      0: "Busco algo serio",
      1: "Quiero nuevas amistades",
      2: "Busco a alguien para salir y divertirme",
      3: "Aún no lo se",
    },
  },
  {
    title: "Seleccione la edad de la persona que quieres conocer",
    options: {
      0: "18 a 25 añso",
      1: "26 a 35 años",
      2: "36 a 45 años",
      3: "46 a 55 años",
      4: "Más de años",
      5: "La edad no es lo más impórtante",
    },
  },
  {
    title: "Seleccione la nacionalidad de la persona que quieras conocer",
    options: {
      0: "Chilena",
      1: "Extranjera",
      2: "Me da igual",
    },
  },
];

const textAreaQuestion = [
  {
    title: "Cuéntanos cómo es la persona que quieres conocer",
    placeHolder: "Dinos tus preferencias...",
  },
];

const infoBlockStyle = [
  {
    parrafo: "Si quieres saber más, contactanos: ",
    email: "info@faceitcitasrápidas.com",
  },
];

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
=======
const Survey = () => {
  return <div></div>;
>>>>>>> footer
};
export default Survey;
