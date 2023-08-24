const fs = require('node:fs');
const config = require('../config');

let productos = [];

const datos = () => {    
    obj = {
    nombre: String,
    descripcion: String,
    peso_en_gramos: Number,
    medidas_cm: {largo: Number, ancho: Number, alto: Number},
    id: {type: Number, required: true}
    }
}

let id = 1;
const generarNuevoId = () => id++;

const agregar = (producto) => {     
    producto.id = generarNuevoId();  
    productos.push(producto);

    fs.writeFileSync(config.DB_NAME, JSON.stringify(productos)/* , {flag:'a+'} */, (err) => {
        if (err) {throw err};
        console.log('Producto registrado');
    });
}

const mostrarTodos = () => productos;

module.exports = {
    agregar, datos, mostrarTodos
}