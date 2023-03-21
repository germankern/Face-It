import ReactDOM from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ModalCompleted = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && createPortal(children, document.getElementById("__modal"))}
    </>
  );
};

export default ModalCompleted;
