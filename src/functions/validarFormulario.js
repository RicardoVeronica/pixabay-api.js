import * as UI from "../selectors";
import mostrarAlerta from "./mostrarAlerta";

function validarFormulario() {
  // Valida datos del formulario
  if (UI.terminoBusqueda.value === "") {
    mostrarAlerta("agrega un termino de busqueda");
  }
}

export default validarFormulario;
