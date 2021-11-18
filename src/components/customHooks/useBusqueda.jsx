import React, { useContext, useEffect, useState } from "react";
import Appcontext from "../../context/Appcontext";

export default function useBusqueda() {
  //Global
  const { mostrarnocturno, setData, setSearch, search, setBuscar, buscar } =
    useContext(Appcontext);
  //Local

  const actualizarSearch = (e) => {
    setSearch(e.target.value);
  };
  const actualizarBuscar = (e) => {
    e.preventDefault();
    setBuscar(true);
  };
  useEffect(() => {
    if (buscar === true) {
      let peticion = fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=chciLAiJmVF5UuOqMilNTkN8rcJTEiqT&q=${search}&limit=15&offset=0&rating=g&lang=es`
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
    }
  }, [buscar, search]);
  return {
    actualizarSearch,
    actualizarBuscar,
    search,
    mostrarnocturno,
  };
}
