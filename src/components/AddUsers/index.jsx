import styles from "./style.module.css";
import SelectOptions from "../SelectOptions";
import UnderlineQuestions from "../UnderlineQuestions";
import { useState, useEffect } from "react";
import ContainerUsers from "../ContainerUsers";
import ButtonAddUser from "../ButtonAddUser";

const AddUser = ({ placeHolder, question1, options, question2, onChange }) => {
  const [usersform, setusersForm] = useState([]);
  const [user, setuser] = useState("");
  const [username, setUsername] = useState("");
  const handleDeleteData = (id) => {
    const dataForm = [...usersform];
    dataForm.splice(id, 1);
    setusersForm(dataForm);
    onChange("networks", [...dataForm]);
  };

  return (
    <div className={styles.containerAddUsers}>
      <h2>¿Dónde te encontramos?</h2>
      {usersform.map((item, index) => (
        <ContainerUsers
          key={index}
          id={index}
          users={item.network}
          username={item.name}
          onDeleteData={handleDeleteData}
        />
      ))}
      <div className={styles.containerDescripitionUser}>
        <SelectOptions
          placeHolder={placeHolder}
          title={question1}
          options={options}
          setuser={setuser}
        />

        <UnderlineQuestions question={question2} setUsername={setUsername} />
      </div>

      <ButtonAddUser
        name="Agregar"
        span="+"
        type="survey"
        users={usersform}
        setusersForm={setusersForm}
        user={user}
        placeHolder={placeHolder}
        username={username}
        onChange={onChange}
      />
    </div>
  );
};

export default AddUser;
