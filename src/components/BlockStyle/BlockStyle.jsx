import styles from "./style.module.css";

const BlockStyle = ({ parrafo, email, bold }) => {
  const boldParragraph = bold ? parrafo.replace(bold, `<b>${bold}</b>`) : "";
  return (
    <>
      <div className={styles.containerBlockStyle}>
        {bold ? (
          <p dangerouslySetInnerHTML={{ __html: boldParragraph }}></p>
        ) : (
          <>
            <p>{parrafo}</p>
            <b>{email}</b>
          </>
        )}
      </div>
    </>
  );
};

export default BlockStyle;
