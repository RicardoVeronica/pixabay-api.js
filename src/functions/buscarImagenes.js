import mostrarImagenes from "./mostrarImagenes";

function buscarImagenes(imagenes) {
  // Busca imagen en la API de Pixabay
  const key = "xxx";
  const url = `https://pixabay.com/api/?key=${key}&q=${imagenes}&per_page=100`;

  fetch(url)
    .then((resultado) => resultado.json())
    .then((resultado) => {
      mostrarImagenes(resultado.hits);
    });
}

export default buscarImagenes;
