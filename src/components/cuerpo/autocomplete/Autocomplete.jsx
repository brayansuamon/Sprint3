import React, { useContext } from "react";
import Appcontext from "../../../context/Appcontext";
import peticionListagifs from "../../../Peticiones/listagifs";
import "./Autocomplete.scss";

export default function Autocomplete() {
  const { dataauto, setData, setSearch, setDataauto } = useContext(Appcontext);

  const cambio = (datoa) => {
    setSearch(datoa.name);
    // setBuscar(true);
    setDataauto([]);
    peticionListagifs(datoa.name)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setData(datos.data);
        // setBuscar(false);
      })
      .catch((error) => {
        console.log("No se encontró la data autocomplete");
      });
  };

  console.log(dataauto.length);
  return (
    <>
      {dataauto.length > 0 ? (
        <ul className="formulario">
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
