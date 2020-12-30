import mostrarImagenes from "./mostrarImagenes";

async function buscarImagenes(imagenes) {
  // Busca imagen en la API de Pixabay cambiado promise a async/await
  const key = "xxx";
  const url = `https://pixabay.com/api/?key=${key}&q=${imagenes}&per_page=100`;

  // fetch(url)
  //   .then((resultado) => resultado.json())
  //   .then((resultado) => {
  //     mostrarImagenes(resultado.hits);
  //   });

  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    mostrarImagenes(resultado.hits);
  } catch (e) {
    console.log(e);
  }
}

export default buscarImagenes;
