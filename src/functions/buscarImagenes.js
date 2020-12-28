import mostrarImagenes from "./mostrarImagenes";

function buscarImagenes(imagenes) {
  // Busca imagen en la API de Pixabay
  const key = "19694072-3cb3b29e82b493aeef4355860";
  const url = `https://pixabay.com/api/?key=${key}&q=${imagenes}`;

  fetch(url)
    .then((resultado) => resultado.json())
    .then((resultado) => {
      mostrarImagenes(resultado.hits);
    });
}

export default buscarImagenes;
