import * as UI from "../selectors";

function mostrarAlerta(mensaje) {
  // Mustra alertas en el HTML
  const existeAlerta = document.querySelector(".bg-red-100");

  if (!existeAlerta) {
    const alerta = document.createElement("p");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    alerta.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block sm:inline">${mensaje}</span>
  `;

    UI.formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 2500);
  }
}

export default mostrarAlerta;
