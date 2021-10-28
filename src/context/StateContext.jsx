import Appcontext from "./Appcontext";
import { useState } from "react";

const Statecontext = ({ children }) => {
  const [mostrarnocturno, setMostrarnocturno] = useState(false);
  const [data, setData] = useState([]);

  return (
    <Appcontext.Provider
      value={{ mostrarnocturno, setMostrarnocturno, setData, data }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default Statecontext;
