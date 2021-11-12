import React, { useContext } from "react";
import Appcontext from "../../../context/Appcontext";
import useAutocomplete from "../../customHooks/useAutocomplete";
import useBusqueda from "../../customHooks/useBusqueda";
import "./Autocomplete.scss";

export default function Autocomplete() {
  const { dataauto, data, setSearch } = useContext(Appcontext);
  const busqueda = useBusqueda();
  //Invocar la función
  let invocacion = useAutocomplete();

  let actualizarSe = () => {
    setSearch(dataauto[0].name);
  };

  return (
    <>
      {dataauto.length > 0 && data.length === 0 ? (
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
                onClick={busqueda.actualizarBuscar}
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
