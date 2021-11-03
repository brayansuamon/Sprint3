import React, { useEffect } from "react";
import useBusqueda from "./useBusqueda";
import Appcontext from "../../context/Appcontext";

export default function useAutocomplete() {
  busqueda = useBusqueda();
  const { setDataauto } = useContext(Appcontext);

  useEffect(() => {
    let autocompletado = fetch(
      ` https://api.giphy.com/v1/gifs/search/tags?api_key=chciLAiJmVF5UuOqMilNTkN8rcJTEiqT&q=${busqueda.search}&limit=5`
    );

    autocompletado
      .then((response) => {
        return response.json();
      })
      .then((dataaut) => {
        setdataauto(dataaut.data);
      });
  }, [busqueda.search]);
}
