const randomNumber = (from = 1, to = 10) => Math.floor(Math.random() * (to - from + 1)) + from;

const buscarNumeroMasCercano = (randNum, numeros) => {
    const numeroMasCercano = numeros.reduce((prev, curr) => {
        return Math.abs(curr - randNum) < Math.abs(prev - randNum) ? curr : prev;
    });
    return numeroMasCercano;
}  
//slice(2) elimina los primeros dos elementos de 'process.argv', luego convertimos cada elemento de la matriz en un número entero
const numeros = process.argv.slice(2).map(num => parseInt(num));

const promesa = new Promise((resolve, reject) => {
    const n = randomNumber();
    const index = numeros.indexOf(n);
    if (index !== -1) {
        resolve(`Ganaste, el número era ${n} y se encontraba en la posición ${index + 1}.`);
    } else {
        const numeroMasCercano = buscarNumeroMasCercano(n, numeros);
        reject(`Perdiste, el número era ${n} y tu número más cercano fue el ${numeroMasCercano}.`);
    }
});

promesa
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    });