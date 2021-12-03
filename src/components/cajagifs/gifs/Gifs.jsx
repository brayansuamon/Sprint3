import React from "react";
import "./Gifs.scss";

export default function Gifs({ images: { downsized }, id }) {
  return (
    <div className="Gifs">
      <a href={downsized.url}>
        <img src={`${downsized.url}`} alt="Imagen" />
      </a>
    </div>
  );
}
