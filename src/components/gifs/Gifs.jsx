import React from "react";
import "./Gifs.scss";

export default function Gifs({ images: { downsized }, id }) {
  return (
    <div className="Gifs">
      <img src={`${downsized.url}`} alt="Imagen" />
    </div>
  );
}
