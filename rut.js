// import {} from '';
// palabra clave import
// nombre de la variable, funcion, objeto o clase
// palabra clave from
// ruta del archivo
// import { format } from "rut.js";
const {format} = require('rut.js')

const rutFormateado = format("123456789");
console.log(rutFormateado);

const exportedVar = {
    name: "Juan",
    lastName: "Lobos",
}

module.exports = {exportedVar, rutFormateado};
// export {rutFormateado};
