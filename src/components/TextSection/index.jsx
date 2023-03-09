import Cokkies from "../Cokkies/index";
import Licencia from "../Licencia/index";
import Hipervínculos from "../Hipervinculos/index";
import Responsabilidad from "../Responsabilidad/index";
import Reserva from "../Reserva/index";
import Derechos from "../Derechos";
import SectionParagraphPoliticals from "../SectionParagraphPoliticals";

const getComponent = (type) =>
  type === "Cokkies"
    ? Cokkies
    : type === "Licencia"
    ? Licencia
    : type === "Hipervinculos"
    ? Hipervinculos
    : type === "Responsabilidad"
    ? Responsabilidad
    : type === "Reserva"
    ? Reserva
    : type === "Derechos"
    ? Derechos
    : SectionParagraphPoliticals;

const TextSection = ({
  title,
  type,
  id,
  allParagraph,
  allParagraph2,
  allParagraph3,
  allParagraph4,
  allList,
  allList2,
  allList3,
}) => {
  let textSection;
  allParagraph = Object.values(allParagraph);
  allParagraph2 = allParagraph2 && Object.values(allParagraph2);
  allParagraph3 = allParagraph3 && Object.values(allParagraph3);
  allParagraph4 = allParagraph4 && Object.values(allParagraph4);
  allList = allList && Object.values(allList);
  allList2 = allList2 && Object.values(allList2);
  allList3 = allList3 && Object.values(allList3);
  const Component = getComponent(type);

  if (Component) {
    textSection = (
      <Component
        title={title}
        allParagraph={allParagraph}
        allParagraph2={allParagraph2}
        allParagraph3={allParagraph3}
        allParagraph4={allParagraph4}
        allList={allList}
        allList2={allList2}
        allList3={allList3}
        id={id}
      />
    );
  }

  return <>{textSection}</>;
};

export default TextSection;
