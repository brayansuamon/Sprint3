import React, { useContext } from "react";
import Header from "./components/header/Header";
import Cuerpo from "./components/cuerpo/Cuerpo";
import Cajagifs from "./components/cajagifs/Cajagifs";
import "./App.scss";
import Appcontext from "./context/Appcontext";

export default function App() {
  const { mostrarnocturno } = useContext(Appcontext);

  let modoapp = mostrarnocturno ? "ModoNegro" : "ModoBlanco";
  return (
    <div className="modoapp">
      <div>
        <Header />
        <Cuerpo />
        <Cajagifs />
      </div>
    </div>
  );
}
