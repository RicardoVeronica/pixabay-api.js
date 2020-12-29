// Calcula paginas a mostrar en el paginador
const registrosPorPagina = 40;

const calcularPaginas = (total) =>
  parseInt(Math.ceil(total / registrosPorPagina));

export default calcularPaginas;
