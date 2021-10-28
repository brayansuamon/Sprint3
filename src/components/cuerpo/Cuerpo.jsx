import React, { useContext } from "react";
import "./Cuerpo.scss";
import Appcontext from "../../context/Appcontext";

export default function Cuerpo() {
  const { mostrarnocturno } = useContext(Appcontext);

  return (
    <section className="cuerpo">
      <article className="titulo">
        <h1>
          ¡Inspirate y busca los mejores <span className="GIFS">GIFS</span>!
        </h1>
      </article>
      <div className="imageheader">
        <img src="./images/ilustra_header.svg" alt="Ilustracion" />
      </div>
      <form className="buscador">
        <input
          type="text"
          placeholder="Buscar Gif"
          className={`${mostrarnocturno ? "InputLigth" : "InputDark"}`}
        />

        <button className="busqueda">
          {mostrarnocturno ? (
            <img src="./images/icon-search.svg" alt="Ligth" />
          ) : (
            <img src="./images/icon-search-mod-noc.svg" alt="Night" />
          )}
        </button>
      </form>
    </section>
  );
}
