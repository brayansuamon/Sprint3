import React, { useContext } from "react";
import Appcontext from "../../context/Appcontext";
import Gifs from "../gifs/Gifs";
import "./Cajagifs.scss";

export default function Cajagifs() {
  //Importacion data
  const { data, mostrarnocturno } = useContext(Appcontext);
  let TituloBusqueda = mostrarnocturno ? "ModoN" : "ModoL";
  return (
    <main className="Cajagifs">
      {data.length > 0 ? (
        <>
          <h1 className="Mensaje">Resultados de la búsqueda</h1>
          {data.map((gif) => {
            return <Gifs {...gif} key={gif.id} id={gif.id} />;
          })}
        </>
      ) : (
        <div className={`${TituloBusqueda} TituloGifs`}>
          <h1>Realiza tu busqueda</h1>
        </div>
      )}
    </main>
  );
}
