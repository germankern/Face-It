import styles from "./style.module.css";
import React, { useState, useEffect } from "react";
import DropDownsOptions from "../DropDownsOptions";

const SelectOptions = (props) => {
  const [placeHolder, setplaceHolder] = useState(" ");
  const [active, setactive] = useState("");
  useEffect(() => {
    setplaceHolder(props.placeHolder);
  }, [props.placeHolder]);
  return (
    <>
      <div className={`${styles.containerSelectOptions}`}>
        <label>{props.title}</label>
        <div
          onClick={() => {
            active != "active" ? setactive("active") : setactive("");
          }}
          className={`${styles.containerDropDown} ${
            active != "" ? styles[active] : ""
          }`}
        >
          <input
            type="text"
            className={styles.textBox}
            placeholder={placeHolder}
            readOnly
          />
          <ul className={styles.option}>
            {props.options.map((item, key) => (
              <DropDownsOptions
                key={key}
                setplaceHolder={setplaceHolder}
                item={item}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SelectOptions;
