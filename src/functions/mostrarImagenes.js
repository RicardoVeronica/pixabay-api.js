import * as UI from "../selectors";

function mostrarImagenes(imagenes) {
  // Mustra las imagenes en el HTML
  while (UI.resultado.firstChild) {
    // Elimina resultado anterior
    UI.resultado.removeChild(UI.resultado.firstChild);
  }

  imagenes.forEach((imagen) => {
    const { previewURL, likes, views, largeImageURL } = imagen;
    UI.resultado.innerHTML += `
      <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
        <div class="bg-white">
          <img src="${previewURL}" alt="Image" class="w-full">
          <div class="p-4">
            <p class="font-bold">${likes} <span class="font-light">Me Gusta</span></p>
            <p class="font-bold">${views} <span class="font-light">Vistas</span></p>
            <a
              class=
              "
                block
                w-full
                bg-blue-800
                hover:bg-blue-500
                text-white
                uppercase
                font-bold
                text-center
                rounded
                mt-5
                p-1
              "
              href="${largeImageURL}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Imagen
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

export default mostrarImagenes;
