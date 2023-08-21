const fs = require('node:fs');
const dotenv = require('dotenv');
dotenv.config();//llama a los valores de process.env

const SECRET_DB_NAME = process.env.DB_NAME || '';
//console.log(`${process.env.DB_NAME}`);

// let resultado = [];
// try {
//     const data = fs.readFileSync(SECRET_DB_NAME, 'utf-8');
//     resultado = Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
// } catch (error) {
//     //console.error(error);
//     resultado = [];
// }

const ts = () => {
    let date = new Date();
    let d = `${date.toLocaleString()}.${date.getMilliseconds()}`;
    return d; //'DD/MM/YYYY, HH:MM:SS.mmm'
};

const guardarRegistro = (data, nombreOperacion) => {
    try {//flag :"a" --> abre el archivo para escritura y las nuevas entradas se agreguen al final del archivo en lugar de sobrescribirlo.
        fs.writeFileSync(SECRET_DB_NAME, JSON.stringify(data), { flag: 'a' });
        console.log(`La ${nombreOperacion} se guardo exitosamente en el archivo de registro.`);
    } catch (error) {
        console.error(`Error al escribir la ${nombreOperacion} en el archivo de registro: `, error);
    }
}

module.exports = {
    ts, guardarRegistro
}