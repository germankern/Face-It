import styles from "./styles.module.css";
import Link from "next/link";

const Rules = () => {
  return (
    <div className={styles.containerRules}>
      <h4>Legales</h4>
      <Link href="/faq">
        <p>Preguntas frecuentes</p>
      </Link>
      <Link href="/terms">
        <p>Términos y Condiciones</p>
      </Link>
      <Link href="/politicas">
        <p>Políticas de privacidad</p>
      </Link>
    </div>
  );
};

export default Rules;
