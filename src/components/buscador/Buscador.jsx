import React, { useContext, useEffect, useState } from "react";
import Appcontext from "../../context/Appcontext";
export default function Buscador() {
  //Global
  const { mostrarnocturno, setData } = useContext(Appcontext);
  //Local
  const [search, setSearch] = useState("");
  const [buscar, setBuscar] = useState(false);

  useEffect(() => {
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=b2nzBGK7PBzvBg49w5KLeSNBhNGd7Cbt&q=${search}&limit=15&offset=0&rating=g&lang=es`
    );

    peticion
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setData(datos);
        setBuscar(false);
      });
  }, [buscar]);

  return (
    <form className="buscador">
      <input
        type="text"
        placeholder="Buscar Gif"
        className={`${mostrarnocturno ? "InputLigth" : "InputDark"}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="busqueda" onClick={() => setBuscar(true)}>
        {mostrarnocturno ? (
          <img src="./images/icon-search.svg" alt="Ligth" />
        ) : (
          <img src="./images/icon-search-mod-noc.svg" alt="Night" />
        )}
      </button>
    </form>
  );
}
