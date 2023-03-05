import styles from "./style.module.css";

const alltext = [
  {
    title: "Cokkies:",
    allParagraph: {
      0: "El sitio web utiliza cookies para ayudar a personalizar tu experiencia en línea. Al acceder a Face It! Citas Rápidas, aceptaste utilizar las cookies necesarias.",
      1: "Una cookie es un archivo de texto que un servidor de páginas web coloca en tu disco duro. Las cookies no se pueden utilizar para ejecutar programas o enviar virus a tu computadora. Las cookies se te asignan de forma exclusiva y solo un servidor web en el dominio que emitió la cookie puede leerlas.",
      2: "Podemos utilizar cookies para recopilar, almacenar y rastrear información con fines estadísticos o de marketing para operar nuestro sitio web. Tienes la capacidad de aceptar o rechazar cookies opcionales. Hay algunas cookies obligatorias que son necesarias para el funcionamiento de nuestro sitio web. Estas cookies no requieren tu consentimiento ya que siempre funcionan. Ten en cuenta que al aceptar las cookies requeridas, también aceptas las cookies de terceros, que podrían usarse a través de servicios proporcionados por terceros si utilizas dichos servicios en nuestro sitio web, por ejemplo, una ventana de visualización de video proporcionada por terceros e integrada en nuestro sitio web.",
    },
  },
  {
    title: "Licencia:",
    allParagraph: {
      0: "A menos que se indique lo contrario, Face It! Citas Rápidas y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Face It! Citas Rápidas.",
      1: "Todos los derechos de propiedad intelectual son reservados. Puedes acceder desde Face It! Citas Rápidas para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.",
      2: "No debes:",
    },
    allList: {
      0: "Copiar o volver a publicar material de Face It! Citas Rápidas",
      1: "Vender, alquilar o sublicenciar material de Face It! Citas Rápidas",
      2: "Reproducir, duplicar o copiar material de Face It! Citas Rápidas",
      3: "Redistribuir contenido de Face It! Citas Rápidas",
    },
    allParagraph2: {
      0: "Este acuerdo comenzará el fecha presente.",
      1: "",
      2: "",
    },
  },
  {
    title: "Hipervínculos a nuestro contenido:",
  },
  {
    title: "Responsabilidad del contenido:",
  },
  {
    title: "Reserva de derechos:",
  },
];

const Survey = () => {
  return (
    <div className={styles.SurveyContainr}>
      <div className={styles.IntroductionContainer}>
        <h1>Terminos y Condiciones</h1>
        <p>
          Estos términos y condiciones describen las reglas y regulaciones para
          el uso del sitio web de Face It! Citas Rápidas, ubicado en
          https://faceitcitasrapidas.com/.
        </p>
        <p>
          Al acceder a este sitio web, asumimos que aceptas estos términos y
          condiciones. No continúes usando Face It! Citas Rápidas si no estás de
          acuerdo con todos los términos y condiciones establecidos en esta
          página.
        </p>
      </div>
      <div className={styles.AllTextSection}></div>
    </div>
  );
};

export default Survey;
