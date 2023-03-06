import styles from "./style.module.css";

const ItemParagraph = ({ paragraph }) => {
  return <p className={styles.itemParagraph}>{paragraph}</p>;
};

export default ItemParagraph;
