const calculadoraModel  = require('../models/calculadoraModel');

let arr = [];

const suma = (a, b) => {
    //let arr = new Array().push({
    arr.push({
        timestamp : calculadoraModel.ts(),
        suma : `${a} + ${b}`,
        resultado : `${a + b}`
    });
    //fs.writeFileSync('./log.txt', JSON.stringify(arr));
    calculadoraModel.guardarRegistro(arr, "suma");
}

const resta = (a, b) => {
    arr.push({
        timestamp : calculadoraModel.ts(),
        resta : `${a} - ${b}`,
        resultado : `${a - b}`
    });
    calculadoraModel.guardarRegistro(arr, "resta");
}

const mult = (a, b) => {
    arr.push({
        timestamp : calculadoraModel.ts(),
        mult : `${a} * ${b}`,
        resultado : `${a * b}`
    });
    calculadoraModel.guardarRegistro(arr, "multiplicación");
}

const div = (a, b) => {
    arr.push({
        timestamp : calculadoraModel.ts(),
        div : `${a} / ${b}`,
        resultado : `${a / b}`
    });
    calculadoraModel.guardarRegistro(arr, "división");
}

const operaciones = () => arr;
    // { 
    // let arr = new Array().push(obj)
    // return arr};

module.exports = {
   suma, resta, mult, div, operaciones
}