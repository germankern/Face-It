import ItemListParagraph from "../ItemListParagraph/ItemListParagraph";
import ItemParagraph from "../ItemParagraph/ItemParagraph";
import styles from "./style.module.css";

const SectionParagraph = (props) => {
  return (
    <div className={`${styles.ContainerText} ${props.id}`}>
      <h2>{props.title}</h2>
      {props.allParagraph.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
    </div>
  );
};

const Derechos = (props) => {
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
  const allList = props.allList && Object.values(props.allList);

  if (props.title === "Tus derechos:") {
    textSection = (
      <Derechos
        allParagraph={allParagraph}
        title={props.title}
        allList={allList}
        allParagraph2={allParagraph2}
      />
    );
  } else {
    textSection = (
      <SectionParagraph allParagraph={allParagraph} title={props.title} />
    );
  }

  return <>{textSection}</>;
};

export default TextSection;
