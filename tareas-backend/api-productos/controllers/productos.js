const userModels = require('../models/productos');

const datosProductos = () => userModels.datos();

const agregarProducto = (p) => userModels.agregar(p);

const mostrarProductos = () => userModels.mostrarTodos();

module.exports = {
    datosProductos, agregarProducto, mostrarProductos
}