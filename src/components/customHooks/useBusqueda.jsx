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
  /*useEffect(() => {
    if (search.length >= 1) {
      setAutocomplete(true);
    } else {
      setAutocomplete(false);
    }
  }, [search]);*/
  useEffect(() => {
    //El por Java entiende que buscar es true, no necesito especificarlo
    if (buscar) {
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
          console.log("No se encontró la data");
        });
    }
  }, [buscar]);
  return {
    actualizarSearch,
    actualizarBuscar,
    search,
    mostrarnocturno,
  };
}
