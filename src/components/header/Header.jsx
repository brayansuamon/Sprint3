import React, { useState, useContext } from "react";
import "./Header.scss";
import Appcontext from "../../context/Appcontext";

export default function Header() {
  //const [mostrarnocturno, setMostrarnocturno] = useState(false);

  const { mostrarnocturno, setMostrarnocturno } = useContext(Appcontext);

  const manejarClick = (e) => {
    setMostrarnocturno(!mostrarnocturno);
  };

  return (
    <header className="header">
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
      <button
        onClick={manejarClick}
        className={`${mostrarnocturno ? "darkmode" : "ligthmode"} modos`}
      >
        {mostrarnocturno ? "MODO LIGTH" : "MODO DARK"}
      </button>
    </header>
  );
}
