import React, { useContext, useEffect, useState } from "react";
import Appcontext from "../../context/Appcontext";

export default function useBusqueda() {
  //Global
  const { mostrarnocturno, setData } = useContext(Appcontext);
  //Local
  const [search, setSearch] = useState("");
  const [buscar, setBuscar] = useState(false);

  const actualizarSearch = (e) => {
    setSearch(e.target.value);
  };
  const actualizarBuscar = (e) => {
    e.preventDefault();
    setBuscar(true);
  };
  useEffect(() => {
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=b2nzBGK7PBzvBg49w5KLeSNBhNGd7Cbt&q=${search}&limit=15&offset=0&rating=g&lang=es`
    );

    peticion
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setData(datos.data);
        setBuscar(false);
      })
      .catch((error) => {
        console.log(error + "Error Fetch");
      });
  }, [buscar]);
  return {
    actualizarSearch,
    actualizarBuscar,
    search,
    mostrarnocturno,
  };
}
