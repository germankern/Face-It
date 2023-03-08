import styles from "./style.module.css";

const BlockStyle = ({ parrafo, email, bold }) => {
  let boldParragraph = "";
  bold ? (boldParragraph = parrafo.replace(bold, `<b>${bold}</b>`)) : "";

  return (
    <>
      {bold ? (
        <div className={styles.containerBlockStyle}>
          <p dangerouslySetInnerHTML={{ __html: boldParragraph }}></p>
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
