export default function peticionListagifs(search) {
  let peticion = fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=chciLAiJmVF5UuOqMilNTkN8rcJTEiqT&q=${search}&limit=15&offset=0&rating=g&lang=es`
  );

  return peticion;
}
