const calculadoraService = require('../services/calculadoraService');

const sumaController = (a, b) => calculadoraService.suma(a, b);
const restaController = (a, b) => calculadoraService.resta(a, b);
const multiplicacionController = (a, b) => calculadoraService.mult(a, b);
const divisionController = (a, b) => calculadoraService.div(a, b);

const mostrarOperaciones = () => calculadoraService.operaciones();

module.exports = {
    sumaController, 
    restaController, 
    multiplicacionController, 
    divisionController, 
    mostrarOperaciones,
}
// module.exports.sumaController = sumaController;
