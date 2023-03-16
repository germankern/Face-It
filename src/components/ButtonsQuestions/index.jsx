import { useState } from "react";
import styles from "./style.module.css";

const ContainerRadio = ({ option, name, onChange, data }) => {
  return (
    <div className={styles.containerRadio}>
      <label className={styles.buttonRadio}>
        <input
          type="radio"
          value={option}
          name={name}
          onChange={onChange}
          checked={data === option}
        />
        {option}
        <i></i>
      </label>
    </div>
  );
};

const ButtonQuestions = ({ question, title, name, onChange, data }) => {
  const options = Object.values(question);

  return (
    <>
      <div className={styles.buttonQuestions}>
        <h2>{title}</h2>
        {options.map((item, index) => (
          <ContainerRadio
            key={index}
            option={item}
            name={name}
            onChange={onChange}
            data={data}
          ></ContainerRadio>
        ))}
      </div>
    </>
  );
};

export default ButtonQuestions;
