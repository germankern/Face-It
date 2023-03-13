import ItemParagraph from "../ItemParagraph";
import styles from "./style.module.css";
const SectionParagraphPoliticals = (props) => {
  return (
    <div className={`${styles.containerText} ${props.id}`}>
      <h2>{props.title}</h2>
      {props.allParagraph.map((paragraph, key) => (
        <ItemParagraph key={key} paragraph={paragraph} />
      ))}
    </div>
  );
};

export default SectionParagraphPoliticals;
