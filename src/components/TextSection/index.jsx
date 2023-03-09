import Cokkies from "../Cokkies/index";
import Licencia from "../Licencia/index";
import Hipervínculos from "../Hipervinculos/index";
import Responsabilidad from "../Responsabilidad/index";
import Reserva from "../Reserva/index";

const TextSection = ({
  title,
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
  if (title === "Cokkies:") {
    textSection = (
      <Cokkies
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
  } else {
    if (title === "Licencia:") {
      textSection = (
        <Licencia
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
    } else {
      if (title === "Hipervínculos a nuestro contenido:") {
        textSection = (
          <Hipervínculos
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
      } else {
        if (title === "Responsabilidad del contenido:") {
          textSection = (
            <Responsabilidad
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
        } else {
          if (title === "Reserva de derechos:") {
            textSection = (
              <Reserva
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
        }
      }
    }
  }

  return <>{textSection}</>;
};

export default TextSection;
