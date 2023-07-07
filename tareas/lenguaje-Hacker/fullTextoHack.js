//node mensajeEncriptado.js "Escribir para ver si el texto hacker funciona"
if (!process.argv[2]) {
    console.log("Papu! Faltó el argumento!")
    process.exit(1)
}

const arrayA = ["4", "@", "/\\","Λ"]; //"4 @ /\\"
const arrayE = ["3", "€", "[-"]; // "3 € [-"
const arrayI = ["1", "!"]; // "1 ! |" 
const arrayO = ["0", "*", "()", "Ф"]; // "0 () [] <>"
const arrayU = ["(_)", "|_|", "L|", "v"]; //"(_) |_| L|"
//node fullTextoHack.js "3st@ p4rΛ vn4 m1l@ng4s"

//busca una caracter especial aleartoriamente según su array
let letraRandom = (arr) => {
    let random = 0;
    let length = arr.length;
    random = Math.floor((Math.random() * length) + 1);
    return random;
}

let mensajeEncriptado = (string, arrA, arrE, arrI, arrO, arrU) => {

    let index = 0;
    index = letraRandom(arrA) - 1;
    string = string.replace(/a/gi, arrA[index])

    index = letraRandom(arrE) - 1;
    string = string.replace(/e/gi, arrE[index])

    index = letraRandom(arrI) - 1;
    string = string.replace(/i/gi, arrI[index]);

    index = letraRandom(arrO) - 1;
    string = string.replace(/o/gi, arrO[index]);

    index = letraRandom(arrU) - 1;
    string = string.replace(/u/gi, arrU[index]);

    return string;
}

let mensajeDescrifrado = (string, arrA, letraA, arrE, letraE, arrI, letraI, arrO, letraO, arrU, letraU) => {
    let arrAux = string.split("");
    for (let i = 0; i < arrAux.length; i++) {
        if (arrA.includes(arrAux[i])) {
            arrAux[i] = letraA;
        }
        if (arrE.includes(arrAux[i])) {
            arrAux[i] = letraE;
        }  
        if (arrI.includes(arrAux[i])) {
            arrAux[i] = letraI;
        }  
        if (arrO.includes(arrAux[i])) {
            arrAux[i] = letraO;
        }  
        if (arrU.includes(arrAux[i])) {
            arrAux[i] = letraU;
        }        
    }
    arrAux = arrAux.join("");
    return arrAux;
}

let texto = process.argv[2];

const regex = /^[A-Z ]+$/i

if (regex.test(texto)) {       
    console.log(mensajeEncriptado(texto, arrayA, arrayE, arrayI, arrayO, arrayU));
} else {
    console.log(mensajeDescrifrado(texto, arrayA, "a", arrayE, "e", arrayI, "i", arrayO, "o", arrayU, "u"));
}
//node fullTextoHack.js "3st@ p4rΛ vn4s m1l@ng4s"