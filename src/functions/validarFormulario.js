import * as UI from "../selectors";
import mostrarAlerta from "./mostrarAlerta";
import buscarImagenes from "./buscarImagenes";

function validarFormulario() {
  // Valida datos del formulario
  if (UI.terminoBusqueda.value === "") {
    mostrarAlerta("agrega un termino de busqueda");
  }

  buscarImagenes(UI.terminoBusqueda.value);
}

export default validarFormulario;
