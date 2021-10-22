import React, { useState } from "react";
import "./Header.scss";
export default function Header() {
  const [mostrarnocturno, setMostrarnocturno] = useState(false);

  const manejarClick = (e) => {
    setMostrarnocturno(!mostrarnocturno);
  };

  return (
    <header className="header">
      <div className="imagenheader">
        {" "}
        {mostrarnocturno ? (
          <img src="./images/logo-mobile-modo-noct.svg" alt="Modo Nocturno" />
        ) : (
          <img src="./images/logo-desktop.svg" alt="Modo Diurno" />
        )}
      </div>
      <button
        onClick={manejarClick}
        className={`${mostrarnocturno ? "ligthmode" : "darkmode"} modos`}
      >
        {mostrarnocturno ? "MODO LIGTH" : "MODO DARK"}
      </button>
    </header>
  );
}
