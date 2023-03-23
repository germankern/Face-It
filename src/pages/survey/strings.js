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
    options: ["Soltero", "Casado", "Divorciado", "Viudo"],
  },
  {
    question: "Mi nacionalidad es",
    placeHolder: "",
  },
  {
    question: "Acutalmente vivo en la ciudad de",
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
  {
    question: "Me dedico a ",
    placeHolder: "",
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

export { questions, buttonQuestions, textAreaQuestion, infoBlockStyle };
