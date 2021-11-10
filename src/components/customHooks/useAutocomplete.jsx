import React, { useEffect, useContext } from "react";
import useBusqueda from "./useBusqueda";
import Appcontext from "../../context/Appcontext";

export default function useAutocomplete() {
  const { setDataauto, search } = useContext(Appcontext);
  useEffect(() => {
    let autocompletado = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=chciLAiJmVF5UuOqMilNTkN8rcJTEiqT&q=${search}&limit=5`
    );

    autocompletado
      .then((response) => {
        return response.json();
      })
      .then((dataaut) => {
        setDataauto(dataaut.data);
      });
  }, [search]);
}
