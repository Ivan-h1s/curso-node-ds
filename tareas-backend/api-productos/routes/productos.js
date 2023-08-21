const express = require('express');
const router = express.Router();
const productoControllers = require('../controllers/productos');

router.get('/', (req, res) => {//funca
    try {
        console.log("request GET. Muestro todos.");
        const productos = productoControllers.mostrarProductos();
        res.status(200).json({
            mensaje: 'Todos los productos.',
            productos: productos
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', (req, res) => {//funca
    console.log("request GET. Muestro uno.");
    const productos = productoControllers.mostrarProductos();
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    
    if (!producto) {//si no encuentra el id 
        res.status(404).json({
            mensaje: `No se encontró ningún producto con el ID: ${id}.`
        });
    } else {
        res.status(200).json({
            mensaje: `Producto elegido: ${producto.nombre}.`,
            producto: producto
        });
    }
});

//buscar por nombre del producto
router.get('/:id/:nombre', (req, res) => {//funca
    console.log("request GET. Muestro nombre.");
    const productos = productoControllers.mostrarProductos();
    const nombre = req.params.nombre;
    const regex = new RegExp(nombre, 'i'); // busca cualquier string que coincida, sea upper o lower
    const producto = productos.find(p => regex.test(p.nombre));
    
    if (!producto) {//si no encuentra el id 
        res.status(404).json({
            mensaje: `No se encontró ningún producto con el nombre: ${nombre}.`
        });
    } else {
        res.status(200).json({
            mensaje: `Producto elegido: ${producto.nombre}.`,
            producto: producto
        });
    }
});

router.post('/', (req, res) => {//funca
        
    try {
        console.log("request POST");
        productoControllers.datosProductos(req.body);
        productoControllers.agregarProducto(req.body);
        console.log(req.body);

        res.status(201).json({
        mensaje:`El producto ${req.body.nombre} ha sido agregado.`,
        producto: req.body
    })
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/:id', (req, res) => {      //creo que está
    console.log("request PUT");
    const productos = productoControllers.mostrarProductos(req.body);//req.body??
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);

    if (!producto) {//si no encuentra el id 
        res.status(404).json({
            mensaje: `No se encontró ningún producto con el ID: ${id}.`
        });
    } else {
        producto.nombre = req.body.nombre;
        producto.descripcion = req.body.descripcion;
        producto.peso_en_gramos = req.body.peso_en_gramos;
        producto.medidas_cm.largo = req.body.medidas_cm.largo;
        producto.medidas_cm.ancho = req.body.medidas_cm.ancho;
        producto.medidas_cm.alto = req.body.medidas_cm.alto;
        res.status(200).json(producto);
    }
});

//Arreglar para poder cargar solo una o las necesarias y no todas en postman
router.patch('/:id', (req, res) => {
    console.log("request PATCH");
    const productos = productoControllers.mostrarProductos(req.body);//req.body??
    const id = parseInt(req.params.id);

    const index = productos.findIndex(p => p.id === id);
    
    if (index === -1) {
        res.status(404).json({
            mensaje: `No se encontró ningún producto con el ID: ${id}.`
        }); 
    } else {
        productos[index].nombre = req.body.nombre
        res.status(200).json(productos[index]);
    }
});

router.delete('/:id', (req, res) => {
    const productos = productoControllers.mostrarProductos(req.body);
    const id = parseInt(req.params.id);
    
    const index = productos.findIndex(p => p.id === id);
    
    if (index === - 1) {//si no encuentra el indice
        res.status(404).json({
            mensaje: `No se encontró ningún producto con el ID: ${id}.`
        });
    } else {
        productos.splice(index, 1);       
        res.status(200).json({//con 204 no muestra el mensaje
            mensaje: `Se eliminó el producto con el ID: ${id}.`
        }); 
    } 
});

module.exports = router; 