import ItemListParagraph from "../ItemListParagraph";
import ItemParagraph from "../ItemParagraph";
import styles from "./style.module.css";
const Derechos = (props) => {
  return (
    <div className={`${styles.containerText} ${props.id}`}>
      <h2>{props.title}</h2>
      {props.allParagraph.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
      <ul className={styles.containerList}>
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

export default Derechos;
