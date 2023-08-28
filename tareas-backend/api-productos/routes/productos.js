const express = require('express');
const router = express.Router();
const productoControllers = require('../controllers/productos');

router.get('/', (req, res) => {//muestra todos
    try {
        const productos = productoControllers.mostrarProductos();
        res.status(200).json({
            mensaje: `Cantidad de productos: ${productos.length}`, productos
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', (req, res) => {//busca por id
    const id = parseInt(req.params.id);
    const producto = productoControllers.buscarPorId(id);

    if (!producto) {//si no encuentra el id 
        res.status(404).json({
            mensaje: `No se encontró ningún producto con el ID: ${id}.`
        });
    }
    res.status(200).json({
        mensaje: `Producto elegido: ${producto.nombre}`,
        producto: producto
    });
});

//buscar por coincidencia del nombre del producto
router.get('/:id/:nombre', (req, res) => {//funca
    const nombre = req.params.nombre;
    const producto = productoControllers.buscarPorNombre(nombre);

    if (producto.length === 0) {
        res.status(404).json({
            mensaje: `No se encontró ningún producto con el nombre: ${nombre}.`
        });
    }
    res.status(200).json(producto);
});

router.post('/', (req, res) => {//funca        
    try {
        const { nombre, descripcion, kg, medidas_cm, ...extraProps } = req.body;
        if (!nombre || !descripcion || !kg || !medidas_cm  || !medidas_cm.largo || !medidas_cm.ancho || !medidas_cm.alto) {
            res.status(404).json({
            mensaje: "Error. Faltan datos."
        });
        } else if (Object.keys(extraProps).length > 0 || Object.keys(medidas_cm).length > 3) {
            res.status(404).json({
                mensaje: "No se pueden agregar propiedades adicionales."
            })
        } else {
            productoControllers.addProducto(nombre, descripcion, kg, medidas_cm);
            //console.log(req.body);
            res.status(201).json({
            mensaje:`El producto ${req.body.nombre} ha sido agregado.`,
            producto: req.body
        })}
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/:id', (req, res) => {      //creo que está
    const id = parseInt(req.params.id);    
    const producto = productoControllers.buscarPorId(id);

    if (!producto) {//si no encuentra el id 
        res.status(404).json({
            mensaje: `No se encontró ningún producto con el ID: ${id}.`
        });
    };
     
    const { nombre, descripcion, kg, medidas_cm, ...extraProps } = req.body;
    if (!nombre || !descripcion || !kg || !medidas_cm  || !medidas_cm.largo || !medidas_cm.ancho || !medidas_cm.alto) {
        res.status(404).json({
            mensaje: "Error. Faltan datos."
        });
    } else if (Object.keys(extraProps).length > 0 || Object.keys(medidas_cm).length > 3) {
        res.status(404).json({
            mensaje: "No se pueden agregar propiedades adicionales."
        });
    } else {
        productoControllers.updateProd(producto, req.body);
        console.log(producto);
        res.status(200).json({
            mensaje: `Se actualizo el producto: ${producto.nombre}`, producto
        });
    }
});

router.patch('/:id', (req, res) => {  
    const productos = productoControllers.mostrarProductos();
    const id = parseInt(req.params.id);
    const index = productoControllers.buscarPorIndex(id);
        
    if (index === -1) {//si no encuentra el indice
        res.status(404).json({
            mensaje: `No se encontró ningún producto con el ID: ${id}.`
        });
    } else {
        productoControllers.updateProd(productos[index], req.body);
        res.status(200).json(productos[index]);
    }
});

router.delete('/:id', (req, res) => {
    //const productos = productoControllers.mostrarProductos(req.body);
    const id = parseInt(req.params.id);
    const index = productoControllers.buscarPorIndex(id);
   
    if (index === -1) {//si no encuentra el indice
        res.status(404).json({
            mensaje: `No se encontró ningún producto con el ID: ${id}.`
        });
    } else {
        //productos.splice(index, 1);       
        productoControllers.deleteProd(index);
        res.status(200).json({
            mensaje: `Se eliminó el producto con el ID: ${id}.`
        }); 
    }
});

module.exports = router;