import ItemListParagraph from "../ItemListParagraph/ItemListParagraph";
import ItemParagraph from "../ItemParagraph/ItemParagraph";
import styles from "./style.module.css";

const Cokkies = (props) => {
  return (
    <div className={`${styles.ContainerText} ${props.id}`}>
      <h2>{props.title}</h2>
      {props.allParagraph.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
    </div>
  );
};

const Licencia = (props) => {
  return (
    <div className={`${styles.ContainerText} ${props.id}`}>
      <h2>{props.title}</h2>
      {props.allParagraph.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
      <ul className={styles.ContainerList}>
        {props.allList.map((list, key) => (
          <ItemListParagraph key={key} list={list} />
        ))}
      </ul>
      {props.allParagraph2.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
      <ul className={styles.ContainerList}>
        {props.allList2.map((list, key) => (
          <ItemListParagraph key={key} list={list} />
        ))}
      </ul>
    </div>
  );
};

const Hipervínculos = (props) => {
  return (
    <div className={`${styles.ContainerText} ${props.id}`}>
      <h2>{props.title}</h2>
      {props.allParagraph.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
      <ul className={styles.ContainerList}>
        {props.allList.map((list, key) => (
          <ItemListParagraph key={key} list={list} />
        ))}
      </ul>
      {props.allParagraph2.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
      <ul className={styles.ContainerList}>
        {props.allList2.map((list, key) => (
          <ItemListParagraph key={key} list={list} />
        ))}
      </ul>
      {props.allParagraph3.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
      <ul className={styles.ContainerList}>
        {props.allList3.map((list, key) => (
          <ItemListParagraph key={key} list={list} />
        ))}
      </ul>
      {props.allParagraph4.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
    </div>
  );
};

const Responsabilidad = (props) => {
  return (
    <div className={`${styles.ContainerText} ${props.id}`}>
      <h2>{props.title}</h2>
      {props.allParagraph.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
    </div>
  );
};

const Reserva = (props) => {
  return (
    <div className={`${styles.ContainerText} ${props.id}`}>
      <h2>{props.title}</h2>
      {props.allParagraph.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
      <ul className={styles.ContainerList}>
        {props.allList.map((list, key) => (
          <ItemListParagraph key={key} list={list} />
        ))}
      </ul>
      {props.allParagraph2.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
    </div>
  );
};

const TextSection = (props) => {
  let textSection;
  const allParagraph = Object.values(props.allParagraph);
  const allParagraph2 =
    props.allParagraph2 && Object.values(props.allParagraph2);
  const allParagraph3 =
    props.allParagraph3 && Object.values(props.allParagraph3);
  const allParagraph4 =
    props.allParagraph4 && Object.values(props.allParagraph4);
  const allList = props.allList && Object.values(props.allList);
  const allList2 = props.allList2 && Object.values(props.allList2);
  const allList3 = props.allList3 && Object.values(props.allList3);
  if (props.title === "Cokkies:") {
    textSection = (
      <Cokkies
        title={props.title}
        allParagraph={allParagraph}
        allParagraph2={allParagraph2}
        allParagraph3={allParagraph3}
        allParagraph4={allParagraph4}
        allList={allList}
        allList2={allList2}
        allList3={allList3}
        id={props.id}
      />
    );
  } else {
    if (props.title === "Licencia:") {
      textSection = (
        <Licencia
          title={props.title}
          allParagraph={allParagraph}
          allParagraph2={allParagraph2}
          allParagraph3={allParagraph3}
          allParagraph4={allParagraph4}
          allList={allList}
          allList2={allList2}
          allList3={allList3}
          id={props.id}
        />
      );
    } else {
      if (props.title === "Hipervínculos a nuestro contenido:") {
        textSection = (
          <Hipervínculos
            title={props.title}
            allParagraph={allParagraph}
            allParagraph2={allParagraph2}
            allParagraph3={allParagraph3}
            allParagraph4={allParagraph4}
            allList={allList}
            allList2={allList2}
            allList3={allList3}
            id={props.id}
          />
        );
      } else {
        if (props.title === "Responsabilidad del contenido:") {
          textSection = (
            <Responsabilidad
              title={props.title}
              allParagraph={allParagraph}
              allParagraph2={allParagraph2}
              allParagraph3={allParagraph3}
              allParagraph4={allParagraph4}
              allList={allList}
              allList2={allList2}
              allList3={allList3}
              id={props.id}
            />
          );
        } else {
          if (props.title === "Reserva de derechos:") {
            textSection = (
              <Reserva
                title={props.title}
                allParagraph={allParagraph}
                allParagraph2={allParagraph2}
                allParagraph3={allParagraph3}
                allParagraph4={allParagraph4}
                allList={allList}
                allList2={allList2}
                allList3={allList3}
                id={props.id}
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
