import styles from "./style.module.css";

const ItemParagraph = (props) => {
  return <p className={styles.ItemParagraph}>{props.paragraph}</p>;
};

export default ItemParagraph;
