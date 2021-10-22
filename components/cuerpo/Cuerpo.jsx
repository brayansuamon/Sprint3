import React from "react";
import "./Cuerpo.scss";

export default function Cuerpo() {
  return (
    <section className="cuerpo">
      <article className="titulo">
        <h1>
          ¡Inspirate y busca los mejores <span className="GIFS">GIFS</span>!
        </h1>
      </article>
      <img src="./images/ilustra_header.svg" alt="Ilustracion" />
      <form className="buscador">
        <div>
          <input type="text" placeholder="Buscar Gif" />
        </div>
        <button>
          <img src="" alt="Busqueda" />
        </button>
      </form>
    </section>
  );
}
