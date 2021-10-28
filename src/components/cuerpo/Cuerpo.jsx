import React, { useContext } from "react";
import "./Cuerpo.scss";

import Buscador from "../buscador/Buscador";

export default function Cuerpo() {
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
      <Buscador />
    </section>
  );
}
