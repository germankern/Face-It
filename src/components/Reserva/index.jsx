import ItemListParagraph from "../ItemListParagraph";
import ItemParagraph from "../ItemParagraph";
import styles from "./style.module.css";
const Reserva = ({ id, title, allParagraph, allList, allParagraph2 }) => {
  return (
    <div className={`${styles.containerText} ${id}`}>
      <h2>{title}</h2>
      {allParagraph.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
      <ul className={styles.containerList}>
        {allList.map((list, key) => (
          <ItemListParagraph key={key} list={list} />
        ))}
      </ul>
      {allParagraph2.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
    </div>
  );
};

export default Reserva;
