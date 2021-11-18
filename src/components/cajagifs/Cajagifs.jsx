import React, { useContext } from "react";
import Appcontext from "../../context/Appcontext";
import Gifs from "./gifs/Gifs";
import "./Cajagifs.scss";

export default function Cajagifs() {
  //Importacion data
  const { mostrarnocturno, data, dataauto } = useContext(Appcontext);
  let TituloBusqueda = mostrarnocturno ? "ModoN" : "ModoL";
  let colorcaja = mostrarnocturno ? "CajaNegra" : "CajaBlanca";

  return (
    <main className={`${colorcaja} Cajagifs`}>
      {data.length > 0 ? (
        <div>
          <h1 className={`${TituloBusqueda} Mensaje`}>
            Resultados de la búsqueda
          </h1>
          <section className="FondoCaja">
            {data.map((gif) => {
              return <Gifs {...gif} key={gif.id} id={gif.id} />;
            })}
          </section>
        </div>
      ) : dataauto.length > 0 ? null : (
        <div className={`${TituloBusqueda} TituloGifs`}>
          <h1>Realiza tu busqueda</h1>
        </div>
      )}
    </main>
  );
}
