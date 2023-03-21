import { use } from "react";
import styles from "./style.module.css";
const ButtonAddUser = ({
  name,
  span,
  type,
  users,
  setusersForm,
  user,
  placeHolder,
  username,
  onChange,
}) => {
  const users2 = [...users];
  function addUser() {
    if (
      placeHolder === "Facebook" &&
      users2.length === 0 &&
      user === "Facebook"
    ) {
      const objectUser = { network: "Facebook", name: username };
      users2.push(objectUser);
      setusersForm(users2);
    } else if (user === "") {
      const objectUser = { network: "Facebook", name: username };
      users2.push(objectUser);
      setusersForm(users2);
    } else if (user != "") {
      const objectUser = { network: user, name: username };
      users2.push(objectUser);
      setusersForm(users2);
    } else {
      if ((user != "" && users2.length !== 0) || placeHolder === "Facebook") {
        const objectUser = { network: user, name: username };
        users2.push(objectUser);
        setusersForm(users2);
      }
    }

    onChange("Networks", [...users2]);
  }
  return (
    <div
      className={`${styles.containerButtomUser} ${
        type === "survey" ? styles.buttonSurvey : ""
      } ${type === "submit" ? styles.buttonSubmit : ""}`}
    >
      <button type="button" onClick={() => addUser()}>
        <span>{span}</span>
        {name}
      </button>
    </div>
  );
};

export default ButtonAddUser;
