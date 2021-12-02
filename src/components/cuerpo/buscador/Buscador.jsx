import React, { useContext } from "react";
import Appcontext from "../../../context/Appcontext";
import peticionAutocompletado from "../../../Peticiones/autocomplete";
import peticionListagifs from "../../../Peticiones/listagifs";

import "./Buscador.scss";

export default function Buscador() {
  const { search, setDataauto, setSearch, mostrarnocturno, setData } =
    useContext(Appcontext);

  const actualizarBuscar = (e) => {
    e.preventDefault();
    setDataauto([]);
    peticionListagifs(search)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setData(datos.data);
        // setBuscar(false);
      })
      .catch((error) => {
        console.log("No se encontró la data autocomplete");
      });
  };

  const actualizarSearch = (e) => {
    peticionAutocompletado(e.target.value)
      .then((response) => {
        return response.json();
      })
      .then((dataaut) => {
        setDataauto(dataaut.data);
        //Acá deberia activar el texto de autocomplete
      });
    setSearch(e.target.value);
  };
  let buscadorcolor = mostrarnocturno ? "BuscadorNegro" : "BuscadorBlanco";

  return (
    <form className={`${buscadorcolor} buscador`}>
      <input
        type="search"
        placeholder="Buscar Gif"
        className={`${mostrarnocturno ? "InputDark" : "InputLigth"}`}
        value={search}
        onChange={actualizarSearch}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            actualizarBuscar(e);
          }
        }}
      />

      <button type="button" className="busqueda" onClick={actualizarBuscar}>
        {mostrarnocturno ? (
          <img src="./images/icon-search-mod-noc.svg" alt="Night" />
        ) : (
          <img src="./images/icon-search.svg" alt="Ligth" />
        )}
      </button>
    </form>
  );
}
