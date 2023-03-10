import styles from "./style.module.css";

const BlockStyle = ({ parrafo, email, bold, title }) => {
  let boldParragraph = "";
  bold ? (boldParragraph = parrafo.replace(bold, `<b>${bold}</b>`)) : "";

  return (
    <>
      {bold && !title ? (
        <div className={styles.containerBlockStyle}>
          <p dangerouslySetInnerHTML={{ __html: boldParragraph }}></p>
        </div>
      ) : title ? (
        <div className={styles.containerBlockStyle} id={styles.blockTitle}>
          <h1>{title}</h1>
          <p>{parrafo}</p>
        </div>
      ) : (
        <div className={styles.containerBlockStyle}>
          <p>{parrafo}</p>
          <b>{email}</b>
        </div>
      )}
    </>
  );
};

export default BlockStyle;
