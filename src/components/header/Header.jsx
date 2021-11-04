import React, { useState, useContext } from "react";
import "./Header.scss";
import Appcontext from "../../context/Appcontext";

export default function Header() {
  const { mostrarnocturno, setMostrarnocturno } = useContext(Appcontext);

  const manejarClick = (e) => {
    setMostrarnocturno(!mostrarnocturno);
  };

  let modoNocturno = mostrarnocturno ? "darkmode" : "ligthmode";
  let headercolor = mostrarnocturno ? "HeaderNegro" : "HeaderBlanco";
  return (
    <header className={`${headercolor} header`}>
      <div className="imagenheader">
        {mostrarnocturno ? (
          <img
            className="imagenesh"
            src="./images/logo-mobile-modo-noct.svg"
            alt="Modo Nocturno"
          />
        ) : (
          <img
            className="imagenesh"
            src="./images/logo-desktop.svg"
            alt="Modo Diurno"
          />
        )}
      </div>
      <button onClick={manejarClick} className={`${modoNocturno} modos`}>
        {mostrarnocturno ? "MODO LIGTH" : "MODO DARK"}
      </button>
    </header>
  );
}
