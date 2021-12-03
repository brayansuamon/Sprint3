import Appcontext from "./Appcontext";
import { useState, useEffect } from "react";

const Statecontext = ({ children }) => {
  const [mostrarnocturno, setMostrarnocturno] = useState(false);
  const [data, setData] = useState([]);
  const [dataauto, setDataauto] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=chciLAiJmVF5UuOqMilNTkN8rcJTEiqT&limit=15`
    )
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setData(datos.data);
      })
      .catch((error) => {
        console.log("No se encontró la data inicial");
      });
  }, []);

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
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default Statecontext;
