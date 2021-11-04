import React, { useContext } from "react";
import Appcontext from "../../context/Appcontext";
import useAutocomplete from "../customHooks/useAutocomplete";
import "./Autocomplete.scss";

export default function Autocomplete() {
  const { dataauto, data } = useContext(Appcontext);
  let searcha = useAutocomplete();
  return (
    <>
      {dataauto.length > 0 && data.length === 0 ? (
        <ul className="formulario">
          <li className="lisuperior">{dataauto[0].name}</li>
          <li>{dataauto[1].name}</li>
          <li>{dataauto[2].name}</li>
          <li>{dataauto[3].name}</li>
          <li className="liinferior">{dataauto[4].name}</li>
        </ul>
      ) : null}
    </>
  );
}
