const userModels = require('../models/productos');

// const datosProductos = () => userModels.datos();

// const agregarProducto = (p) => userModels.agregar(p);

const mostrarProductos = () => userModels.mostrarTodos();

const buscarPorId = (id) => userModels.prodId(id);

const buscarPorIndex = (id) => userModels.prodIndex(id);

const buscarPorNombre = (nombre) => userModels.regexNombre(nombre);

const addProducto = (nombre, descripcion, peso_en_gramos, medidas_cm/* , largo, ancho, alto */) => userModels.add(nombre, descripcion, peso_en_gramos, medidas_cm/* , largo, ancho, alto */);

const updateProd = (p, body) => userModels.update(p, body);

module.exports = {
    mostrarProductos, buscarPorId, buscarPorIndex, buscarPorNombre,  addProducto, updateProd   /* ,datosProductos, agregarProducto,  */
}