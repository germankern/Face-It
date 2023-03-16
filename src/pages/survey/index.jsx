import AddUser from "@/components/AddUsers";
import BlockStyle from "@/components/BlockStyle/BlockStyle";
import Button from "@/components/Button";
import ButtonQuestions from "@/components/ButtonsQuestions";
import MainSection from "@/components/MainSection";
import ModalCompleted from "@/components/ModalCompleted";
import Modal from "@/components/ModalCompleted";
import SelectOptions from "@/components/SelectOptions";
import TextArea from "@/components/TextArea";
import UnderlineQuestions from "@/components/UnderlineQuestions";
import useForm from "@/hooks/useForm";
import {
  questions,
  buttonQuestions,
  textAreaQuestion,
  infoBlockStyle,
} from "./strings";
import styles from "./style.module.css";

const Survey = () => {
  const initialState = {
    nombre: "",
    genero: "Masculino",
    edad: "",
    estadoCivil: "Soltero",
    nacionalidad: "",
    ciudad: "",
    networks: "",
    correo: "",
    telefono: "",
    orientacionSexual: "",
    interesServicio: "",
    interesPersona: "",
    interesEdadPersona: "",
    interesNacionalidadPersona: "",
  };
  const handleSubmit2 = (formData) => {
    // const newdata = [...formData];
    // const networks = newdata.networks;
    // delete newdata.networks;
    // console.log(newdata);
    // console.log(networks);
    const {
      nombre,
      genero,
      edad,
      estadoCivil,
      nacionalidad,
      ciudad,
      correo,
      telefono,
      orientacionSexual,
      interesServicio,
      interesPersona,
      interesEdadPersona,
      interesNacionalidadPersona,
    } = formData;
    let networks = "";
    formData.networks
      ? (networks = formData.networks
          .map((network) => `${network.name} (${network.network})`)
          .join(", "))
      : null;

    const newData = {
      Name: nombre,
      Genero: genero,
      Edad: edad,
      EstadoCivil: estadoCivil,
      Nacionalidad: nacionalidad,
      Ciudad: ciudad,
      Networks: networks,
      Correo: correo,
      Telefono: telefono,
      OrientacionSexual: orientacionSexual,
      InteresServicio: interesServicio,
      InteresPersona: interesPersona,
      InteresEdadPersona: interesEdadPersona,
      InteresNacionalidadPersona: interesNacionalidadPersona,
    };

    console.log(newData);

    const formData2 = new FormData();
    for (let key in newData) {
      formData2.append(key, newData[key]);
    }
    for (let entry of formData2.entries()) {
      console.log(entry[0] + ": " + entry[1]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbwhYFih1ebdS10_Po313bc7zVXCg6pH-V8SvVbUVs2JFL9AglVpXn34aQSymuy5Cw2U/exec",
      {
        method: "POST",
        body: formData2,
      }
    );
  };

  const { formData, handleInputChange, handleSubmit, handleAddOption } =
    useForm(initialState, handleSubmit2);

  const names = [
    "nombre",
    "genero",
    "edad",
    "estadoCivil",
    "nacionalidad",
    "ciudad",
    "networks",
    "correo",
    "telefono",
    "orientacionSexual",
    "interesServicio",
    "interesPersona",
    "interesEdadPersona",
    "interesNacionalidadPersona",
  ];

  return (
    <>
      <MainSection name="survey" />
      <form onSubmit={handleSubmit}>
        <main className={styles.mainContainer}>
          <h2>Cuéntanos sobre tí</h2>
          <UnderlineQuestions
            question={questions[0].question} //1
            data={formData.nombre}
            onChange={handleInputChange}
            name={names[0]}
          ></UnderlineQuestions>
          <SelectOptions
            placeHolder={questions[1].placeHolder} //2
            title={questions[1].question}
            options={questions[1].options}
            data={formData.genero}
            name={names[1]}
            onChange={handleAddOption}
          ></SelectOptions>
          <UnderlineQuestions
            question={questions[2].question} //3
            text={questions[2].text}
            data={formData.edad}
            onChange={handleInputChange}
            name={names[2]}
          />
          <SelectOptions
            placeHolder={questions[3].placeHolder} //4
            title={questions[3].question}
            options={questions[3].options}
            data={formData.estadoCivil}
            onChange={handleAddOption}
            name={names[3]}
          />
          <UnderlineQuestions
            question={questions[4].question} //5
            data={formData.nacionalidad}
            onChange={handleInputChange}
            name={names[4]}
          />
          <UnderlineQuestions
            question={questions[5].question} //6
            data={formData.ciudad}
            onChange={handleInputChange}
            name={names[5]}
          />
          <AddUser
            placeHolder={questions[6].placeHolder} //7
            question1={questions[6].question}
            options={questions[6].options}
            question2={questions[7].question}
            networks={formData.networks}
            onChange={handleAddOption}
            name={names[6]}
          />
          <UnderlineQuestions
            question={questions[8].question}
            data={formData.correo}
            onChange={handleInputChange} //8
            name={names[7]}
          />
          <UnderlineQuestions
            question={questions[9].question} //9
            placeHolder={questions[9].placeHolder}
            data={formData.telefono}
            onChange={handleInputChange}
            name={names[8]}
          />
          <ButtonQuestions
            title={buttonQuestions[0].title} //10
            question={buttonQuestions[0].options}
            data={formData.orientacionSexual}
            onChange={handleInputChange}
            name={names[9]}
          />
          <ButtonQuestions
            title={buttonQuestions[1].title} //11
            question={buttonQuestions[1].options}
            data={formData.interesServicio}
            onChange={handleInputChange}
            name={names[10]}
          />
          <TextArea
            title={textAreaQuestion[0].title} //12
            placeHolder={textAreaQuestion[0].placeHolder}
            data={formData.interesPersona}
            onChange={handleInputChange}
            name={names[11]}
          />
          <ButtonQuestions
            title={buttonQuestions[2].title} //13
            question={buttonQuestions[2].options}
            data={formData.interesEdadPersona}
            onChange={handleInputChange}
            name={names[12]}
          />
          <ButtonQuestions
            title={buttonQuestions[3].title} //14
            question={buttonQuestions[3].options}
            data={formData.interesNacionalidadPersona}
            onChange={handleInputChange}
            name={names[13]}
          />
        </main>
        <Button name="Enviar" type="submit" />
      </form>
      <BlockStyle
        parrafo={infoBlockStyle[0].parrafo}
        email={infoBlockStyle[0].email}
      />
    </>
  );
};
export default Survey;
