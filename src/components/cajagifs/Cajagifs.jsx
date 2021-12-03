import React, { useContext } from "react";
import Appcontext from "../../context/Appcontext";
import Gifs from "./gifs/Gifs";
import "./Cajagifs.scss";

export default function Cajagifs() {
  //Importacion data
  const { mostrarnocturno, data } = useContext(Appcontext);
  let TituloBusqueda = mostrarnocturno ? "ModoN" : "ModoL";
  let BodyFaltante = mostrarnocturno ? "ModoNo" : "ModoLi";
  let colorcaja = mostrarnocturno ? "CajaNegra" : "CajaBlanca";

  return (
    <section className={`${BodyFaltante} Fondogifs`}>
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
        ) : (
          <div className={`${TituloBusqueda} TituloGifs`}>
            <h1>Realiza tu busqueda</h1>
          </div>
        )}
      </main>
    </section>
  );
}
