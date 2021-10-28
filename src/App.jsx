import React from "react";
import Header from "./components/header/Header";
import Cuerpo from "./components/cuerpo/Cuerpo";
import Cajagifs from "./components/cajagifs/Cajagifs";

export default function App() {
  return (
    <div>
      <Header />
      <Cuerpo />
      <Cajagifs />
    </div>
  );
}
