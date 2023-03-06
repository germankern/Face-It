import ItemParagraph from "../ItemParagraph";
import styles from "./style.module.css";
const Cokkies = ({ id, title, allParagraph }) => {
  return (
    <div className={`${styles.containerText} ${id}`}>
      <h2>{title}</h2>
      {allParagraph.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
    </div>
  );
};

export default Cokkies;
