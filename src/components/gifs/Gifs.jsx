import React from "react";

export default function Gifs({ images: { downsized } }) {
  return (
    <div className="Gifs">
      <img src={`${downsized.url}`} alt="Imagen" />
    </div>
  );
}
