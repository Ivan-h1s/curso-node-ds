const express = require('express');
const config = require('./config');//llamo a dotenv

const app = express();
app.use(express.json());

const productosRouter = require('./routes/productos');
app.use('/productos', productosRouter);

try {
    app.listen(config.SERVER_PORT, () => {
        console.log(`Servidor funcionando en http://localhost:${config.SERVER_PORT}/`);
    });
} catch (error) {
    console.error(`El puerto ${config.SERVER_PORT} está ocupado: ${error}`);
}
