import React, { useContext } from "react";
import Appcontext from "../../../context/Appcontext";
import useAutocomplete from "../../customHooks/useAutocomplete";
import useBusqueda from "../../customHooks/useBusqueda";
import "./Autocomplete.scss";

export default function Autocomplete() {
  const { dataauto, data, setSearch, setBuscar, buscar } =
    useContext(Appcontext);
  const busqueda = useBusqueda();
  //Invocar la función
  let invocacion = useAutocomplete();

  const cambio = (datoa) => {
    setSearch(datoa.name);
    setBuscar(true);
  };

  return (
    <>
      {/*Falta averiguar que va en la condicion*/}
      {dataauto.length > 0 && !buscar ? (
        <ul className="formulario">
          {/* <li className="lisuperior" onClick={actualizarSe}>
            {dataauto[0].name}
          </li>
          <li onClick={busqueda.actualizarBuscar}>{dataauto[1].name}</li>
          <li onClick={busqueda.actualizarBuscar}>{dataauto[2].name}</li>
          <li onClick={busqueda.actualizarBuscar}>{dataauto[3].name}</li>
          <li className="liinferior" onClick={busqueda.actualizarBuscar}>
            {dataauto[4].name}
      </li>*/}
          {dataauto.map((datoa) => {
            return (
              <li
                onClick={() => cambio(datoa)}
                key={datoa.analytics_response_payload}
              >
                {datoa.name}
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
