import React from "react";

export default function Gifs({ images: { downsized }, id }) {
  return (
    <div className="Gifs">
      <img src={`${downsized.url}`} alt="Imagen" />
      <div>Hola {id}</div>
    </div>
  );
}
