const fs = require('node:fs');
const config = require('../config');

let productos = [];

// const datos = () => {    
//     obj = {
//     nombre: String,
//     descripcion: String,
//     peso_en_gramos: Number,
//     medidas_cm: {largo: Number, ancho: Number, alto: Number},
//     id: {type: Number, required: true}
//     }
// }

let id = 1;
const generarNuevoId = () => id++;

// const agregar = (producto) => {     
//     producto.id = generarNuevoId();  
//     productos.push(producto);

//     fs.writeFileSync(config.DB_NAME, JSON.stringify(productos), {flag:'a+'}, (err) => {
//         if (err) {throw err};
//         console.log('Producto registrado');
//     });
// }

const add = (nombre, descripcion, peso_en_gramos, medidas_cm/* largo, ancho, alto */) => {
    obj = {
        nombre,
        descripcion,
        peso_en_gramos,
        medidas_cm: {largo: medidas_cm.largo, ancho: medidas_cm.ancho, alto: medidas_cm.alto},
        id
    }
    obj.id = generarNuevoId();
    productos.push(obj);
    const data = `${JSON.stringify(productos)}\n`;
    fs.writeFileSync(config.DB_NAME, data, {flag:'w+'});
}

//muestra el array de objetos
const mostrarTodos = () => productos;

//busca un producto por su key "id"
const prodId = (id) => mostrarTodos().find(prop => prop.id === id);

//buscar por index
const prodIndex = (id) => {
    const products = mostrarTodos();
    return products.findIndex(producto => producto.id === id);
};

// const regex = new RegExp(nombre, 'i'); // busca cualquier string que coincida, sea upper o lower
// const producto = productos.find(p => regex.test(p.nombre));
const regexNombre = (nombre) => {
    const regex = new RegExp(nombre, 'i');
    return mostrarTodos().filter(p => regex.test(p.nombre));
}

// const update = (p, body) => {
//     //const { nombre, descripcion, peso_en_gramos, medidas_cm } = body;
//     p.nombre = body.nombre;
//     p.descripcion = body.descripcion;
//     p.peso_en_gramos = body.peso_en_gramos;
//     p.medidas_cm.largo = body.medidas_cm.largo;
//     p.medidas_cm.ancho = body.medidas_cm.ancho;
//     p.medidas_cm.alto = body.medidas_cm.alto;
// }

const update = (p, body) => {// asi se puede elegir solo una prop para patch y no hay que cargar todas p/ actualizar solo una
    for (let prop in body) {
        p[prop] = body[prop];
    }
};

module.exports = {
    mostrarTodos, add, prodId, prodIndex, regexNombre, update
}