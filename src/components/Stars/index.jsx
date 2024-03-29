import styles from "./style.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const Stars = ({ score, setScore, onChange, name }) => {
  return (
    <>
      <div className={styles.containerStars}>
        <label>Puntuación General</label>
        <div className={styles.containerSvgStars}>
          {[...new Array(5)].map((star, index) => {
            return index < score ? (
              <AiFillStar
                key={index}
                className={styles.iconFill}
                onClick={() => {
                  setScore(index);
                  onChange(name, index);
                }}
              />
            ) : (
              <AiOutlineStar
                key={index}
                className={styles.iconFill}
                onClick={() => {
                  setScore(index + 1);
                  onChange(name, index + 1);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Stars;
