import React from "react";
import useBusqueda from "../../customHooks/useBusqueda";
import "./Buscador.scss";

export default function Buscador() {
  const busqueda = useBusqueda();

  let buscadorcolor = busqueda.mostrarnocturno
    ? "BuscadorNegro"
    : "BuscadorBlanco";

  return (
    <form className={`${buscadorcolor} buscador`}>
      <input
        type="text"
        placeholder="Buscar Gif"
        className={`${busqueda.mostrarnocturno ? "InputDark" : "InputLigth"}`}
        value={busqueda.search}
        onChange={busqueda.actualizarSearch}
      />

      <button
        type="button"
        className="busqueda"
        onClick={busqueda.actualizarBuscar}
      >
        {busqueda.mostrarnocturno ? (
          <img src="./images/icon-search-mod-noc.svg" alt="Night" />
        ) : (
          <img src="./images/icon-search.svg" alt="Ligth" />
        )}
      </button>
    </form>
  );
}
