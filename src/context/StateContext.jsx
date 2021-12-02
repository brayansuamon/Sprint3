import Appcontext from "./Appcontext";
import { useState } from "react";

const Statecontext = ({ children }) => {
  const [mostrarnocturno, setMostrarnocturno] = useState(false);
  const [data, setData] = useState([]);
  const [dataauto, setDataauto] = useState([]);
  const [search, setSearch] = useState("");
  //const [buscar, setBuscar] = useState(false);
  const [error, setError] = useState(false);
  return (
    <Appcontext.Provider
      value={{
        mostrarnocturno,
        setMostrarnocturno,
        setData,
        data,
        dataauto,
        setDataauto,
        search,
        setSearch,
        // buscar,
        //setBuscar,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default Statecontext;
