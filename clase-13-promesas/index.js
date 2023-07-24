//Promesas. Ejercicio del repo del profe https://gitlab.com/danielsegovia/curso-node/-/tree/main/13-promesas
console.log("Iniciando ...");
const randomNumber = (from=1, to=1000) => Math.floor(Math.random() * (to - from + 1)) + from;

const promesa1 = new Promise((resolve, reject) => {
    console.log("Inicio Promesa 1");
    const demora = randomNumber();
    setTimeout(() => {
        const number = randomNumber();
        if (number % 2 === 0) {
            resolve(`Promesa1: El número ${number} es par y demoré ${demora}ms.`);
        } else {
            reject(`Promesa1: BAD NEWS. El número ${number} es impar y demoré ${demora}ms.`);
        }
    }, demora);
})

promesa1
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })

const promesa2 = (demora, number) => new Promise((resolve, reject) => {
    console.log("Inicio Promesa 2");
    setTimeout(() => {
        if (number % 2 === 0) {
            resolve(`Promesa2: El número ${number} es par y demoré ${demora}ms.`);
        } else {
            reject(`Promesa2: BAD NEWS. El número ${number} es impar y demoré ${demora}ms.`);
        }
    }, demora);
})

promesa2(randomNumber(), randomNumber())
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })