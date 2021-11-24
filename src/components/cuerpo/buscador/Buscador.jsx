import React, { useContext } from "react";
import Appcontext from "../../../context/Appcontext";
import peticionAutocompletado from "../../../Peticiones/autocomplete";
import peticionListagifs from "../../../Peticiones/listagifs";
import useBusqueda from "../../customHooks/useBusqueda";
import "./Buscador.scss";

export default function Buscador() {
  const { search, setDataauto, setSearch, mostrarnocturno } =
    useContext(Appcontext);

  const actualizarBuscar = (e) => {
    e.preventDefault();
    setBuscar(true);
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
  /*  let buscadorcolor = busqueda.mostrarnocturno
    ? "BuscadorNegro"
    : "BuscadorBlanco";*/
  let buscadorcolor = "Negro";

  return (
    <form className={`${buscadorcolor} buscador`}>
      <input
        type="text"
        placeholder="Buscar Gif"
        className={`${mostrarnocturno ? "InputDark" : "InputLigth"}`}
        value={search}
        onChange={actualizarSearch}
        //onKeyPress={actualizarSearch}
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
