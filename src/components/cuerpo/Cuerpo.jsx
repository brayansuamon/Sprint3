import React, { useContext } from "react";
import "./Cuerpo.scss";
import Appcontext from "../../context/Appcontext";
import Buscador from "../buscador/Buscador";
import Autocomplete from "../autocomplete/Autocomplete";

export default function Cuerpo() {
  const { mostrarnocturno } = useContext(Appcontext);

  let ClaseTitulo = mostrarnocturno === true ? "NigthTitulo" : "LigthTitulo";

  return (
    <section className="cuerpo">
      <article className={`${ClaseTitulo} titulo`}>
        <h1>
          ¡Inspirate y busca los mejores <span className="GIFS">GIFS</span>!
        </h1>
      </article>
      <div className="imageheader">
        <img src="./images/ilustra_header.svg" alt="Ilustracion" />
      </div>
      <Buscador />
      <Autocomplete />
    </section>
  );
}
