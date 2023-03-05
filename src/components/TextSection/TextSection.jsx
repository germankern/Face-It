import ItemParagraph from "../ItemParagraph/ItemParagraph";
import styles from "./style.module.css";

const TextSection = (props) => {
  return (
    <div className={styles.ContainerText}>
      <h2>{props.title}</h2>
      {props.allparagraphs.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
    </div>
  );
};

export default TextSection;
