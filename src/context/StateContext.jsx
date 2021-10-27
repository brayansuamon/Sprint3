import Appcontext from "./Appcontext";
import { useState } from "react";

const Statecontext = ({ children }) => {
  const [mostrarnocturno, setMostrarnocturno] = useState(false);

  return (
    <Appcontext.Provider value={{ mostrarnocturno, setMostrarnocturno }}>
      {children}
    </Appcontext.Provider>
  );
};

export default Statecontext;
