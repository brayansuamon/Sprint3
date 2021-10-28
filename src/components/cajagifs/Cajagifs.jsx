import React, { useContext } from "react";
import Appcontext from "../../context/Appcontext";
import Gifs from "../gifs/Gifs";
import "./Cajagifs.scss";

export default function Cajagifs() {
  //Importacion data
  const { data } = useContext(Appcontext);
  return (
    <main className="Cajagifs">
      {data.length > 0 ? (
        data.map((gif) => {
          return <Gifs {...gif} key={gif.id} id={gif.id} />;
        })
      ) : (
        <div className="TituloGifs">
          <h1>Realiza tu busqueda</h1>
        </div>
      )}
    </main>
  );
}
