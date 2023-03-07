import styles from "./style.module.css";
import React, { useState, useEffect } from "react";
import DropDownsOptions from "../DropDownsOptions";

const SelectOptions = ({ placeHolder, title, options }) => {
  const [placeholder, setplaceHolder] = useState(" ");
  const [active, setactive] = useState("");
  useEffect(() => {
    setplaceHolder(placeHolder);
  }, [placeHolder]);
  return (
    <>
      <div className={`${styles.containerSelectOptions}`}>
        <label>{title}</label>
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
            placeholder={placeholder}
            readOnly
          />
          <ul className={styles.option}>
            {options.map((item, key) => (
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
