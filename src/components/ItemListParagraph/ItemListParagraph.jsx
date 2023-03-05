import styles from "./styles.module.css";

const ItemListParagraph = (props) => {
  console.log(props.list);
  return <li>{props.list}</li>;
};

export default ItemListParagraph;
