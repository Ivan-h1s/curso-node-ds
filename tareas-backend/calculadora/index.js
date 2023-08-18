const calculadoraController = require('./controllers/calculadoraController');

const n1 = parseFloat(process.argv[2]) || 10;
const n2 = parseFloat(process.argv[3]) || 4;

calculadoraController.sumaController(n1, n2);
calculadoraController.restaController(n1, n2);
calculadoraController.multiplicacionController(n1, n2);
calculadoraController.divisionController(n1, n2);

console.log(calculadoraController.mostrarOperaciones());
