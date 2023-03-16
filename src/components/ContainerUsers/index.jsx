import styles from "./style.module.css";
import Tacho from "../../assets/images/Tacho.svg";
import Image from "next/image";
const ContainerUsers = ({
  id,
  users,
  username,
  usersform,
  setusersForm,
  onChange,
}) => {
  function deleteData() {
    const dataform = [...usersform];
    dataform.splice(id, 1);
    setusersForm(dataform);
    onChange("networks", [...dataform]);
  }
  return (
    <div className={styles.containerUsersForm}>
      <div className={styles.bodyUsers}>
        <p id={styles._1}>{users}</p>
        <p id={styles._2}>@{username}</p>
      </div>
      <div className={styles.buttonDelete} onClick={deleteData}>
        <Image src={Tacho} width={23} height={26} alt="button-tacho" />
      </div>
    </div>
  );
};

export default ContainerUsers;
