import AddUser from "@/components/AddUsers";
import BlockStyle from "@/components/BlockStyle/BlockStyle";
import Button from "@/components/Button";
import ButtonQuestions from "@/components/ButtonsQuestions";
import MainSection from "@/components/MainSection";
import ModalCompleted from "@/components/ModalCompleted";
import SelectOptions from "@/components/SelectOptions";
import TextArea from "@/components/TextArea";
import UnderlineQuestions from "@/components/UnderlineQuestions";
import useForm from "@/hooks/useForm";
import SucessMessage from "../../components/SucessMessage";
import { useState } from "react";
import { formService } from "@/utils/formService";
import {
  questions,
  buttonQuestions,
  textAreaQuestion,
  infoBlockStyle,
} from "./strings";
import styles from "./style.module.css";
const URL_SURVEY_GOOGLE_SHEET =
  "https://script.google.com/macros/s/AKfycbwhYFih1ebdS10_Po313bc7zVXCg6pH-V8SvVbUVs2JFL9AglVpXn34aQSymuy5Cw2U/exec";

const Survey = () => {
  const initialState = {
    Name: "",
    Genero: "Masculino",
    Edad: "",
    EstadoCivil: "Soltero",
    Nacionalidad: "",
    Ciudad: "",
    Networks: "",
    Correo: "",
    Telefono: "",
    OrientacionSexual: "",
    InteresServicio: "",
    InteresPersona: "",
    InteresEdadPersona: "",
    InteresNacionalidadPersona: "",
  };
  const [activeModal, setActiveModal] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const { formData, handleInputChange, handleSubmit, handleAddOption } =
    useForm(initialState, (data) => {
      setLoading(true);
      setError(null);
      try {
        formService.postToGoogleScript(data, URL_SURVEY_GOOGLE_SHEET);
      } catch (error) {
        setError(true);
      }
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    });

  return (
    <>
      <MainSection name="survey" />
      <form onSubmit={handleSubmit}>
        <main className={styles.mainContainer}>
          <h2>Cuéntanos sobre tí</h2>
          <UnderlineQuestions
            question={questions[0].question} //1
            data={formData.Nombre}
            onChange={handleInputChange}
            name="Name"
          ></UnderlineQuestions>
          <SelectOptions
            placeHolder={questions[1].placeHolder} //2
            title={questions[1].question}
            options={questions[1].options}
            data={formData.Genero}
            name="Genero"
            onChange={handleAddOption}
          ></SelectOptions>
          <UnderlineQuestions
            question={questions[2].question} //3
            text={questions[2].text}
            data={formData.Edad}
            onChange={handleInputChange}
            name="Edad"
          />
          <SelectOptions
            placeHolder={questions[3].placeHolder} //4
            title={questions[3].question}
            options={questions[3].options}
            data={formData.EstadoCivil}
            onChange={handleAddOption}
            name="EstadoCivil"
          />
          <UnderlineQuestions
            question={questions[4].question} //5
            data={formData.Nacionalidad}
            onChange={handleInputChange}
            name="Nacionalidad"
          />
          <UnderlineQuestions
            question={questions[5].question} //6
            data={formData.Ciudad}
            onChange={handleInputChange}
            name="Ciudad"
          />
          <AddUser
            placeHolder={questions[6].placeHolder} //7
            question1={questions[6].question}
            options={questions[6].options}
            question2={questions[7].question}
            networks={formData.Networks}
            onChange={handleAddOption}
            name="Networks"
          />
          <UnderlineQuestions
            question={questions[8].question}
            data={formData.Correo}
            onChange={handleInputChange} //8
            name="Correo"
          />
          <UnderlineQuestions
            question={questions[9].question} //9
            placeHolder={questions[9].placeHolder}
            data={formData.Telefono}
            onChange={handleInputChange}
            name="Telefono"
          />
          <ButtonQuestions
            title={buttonQuestions[0].title} //10
            question={buttonQuestions[0].options}
            data={formData.OrientacionSexual}
            onChange={handleInputChange}
            name="OrientacionSexual"
          />
          <ButtonQuestions
            title={buttonQuestions[1].title} //11
            question={buttonQuestions[1].options}
            data={formData.InteresServicio}
            onChange={handleInputChange}
            name="InteresServicio"
          />
          <TextArea
            title={textAreaQuestion[0].title} //12
            placeHolder={textAreaQuestion[0].placeHolder}
            data={formData.InteresPersona}
            onChange={handleInputChange}
            name="InteresPersona"
          />
          <ButtonQuestions
            title={buttonQuestions[2].title} //13
            question={buttonQuestions[2].options}
            data={formData.InteresEdadPersona}
            onChange={handleInputChange}
            name="InteresEdadPersona"
          />
          <ButtonQuestions
            title={buttonQuestions[3].title} //14
            question={buttonQuestions[3].options}
            data={formData.InteresNacionalidadPersona}
            onChange={handleInputChange}
            name="InteresNacionalidadPersona"
          />
        </main>
        <Button name="Enviar" type="submit" setActiveModal={setActiveModal} />
        {activeModal ? (
          <ModalCompleted>
            <SucessMessage loading={loading} />
          </ModalCompleted>
        ) : error ? (
          <p className={styles.errorContainer}>
            Disculpas, algo salió mal al enviar el formulario
          </p>
        ) : null}
      </form>
      <BlockStyle
        parrafo={infoBlockStyle[0].parrafo}
        email={infoBlockStyle[0].email}
      />
    </>
  );
};
export default Survey;
