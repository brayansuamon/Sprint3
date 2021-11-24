import React, { useContext } from "react";
import Appcontext from "../../../context/Appcontext";
import peticionListagifs from "../../../Peticiones/listagifs";
import useAutocomplete from "../../customHooks/useAutocomplete";
import useBusqueda from "../../customHooks/useBusqueda";
import "./Autocomplete.scss";

export default function Autocomplete() {
  const { dataauto, setData, setSearch, setBuscar, buscar, setDataauto } =
    useContext(Appcontext);
  //const busqueda = useBusqueda();
  //Invocar la función
  // let invocacion = useAutocomplete();

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
        console.log("No se encontró la data");
      });
  };

  console.log(dataauto.length);
  return (
    <>
      {/*Falta averiguar que va en la condicion
      {dataauto.length > 0 && !buscar ? ( */}
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
