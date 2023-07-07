//node textoEncriptado.js "Escribir para ver si el texto hacker funciona"
if (!process.argv[2]) {
    console.log("Papu! No escribiste nada.")
    process.exit(1)
}

let texto = process.argv[2];

let letraRandom = (arr) => {
    let random = 0;
    let length = arr.length;
    random = Math.floor((Math.random() * length) + 1);
    return random;
}

let index = 0;
let arrA = ["4", "@", "/\\"];
index = letraRandom(arrA) - 1;
texto = texto.replace(/a/gi, arrA[index])

let arrE = ["3", "€", "[-"];
index = letraRandom(arrE) - 1;
texto = texto.replace(/e/gi, arrE[index])

let arrI = ["1", "!", "|"];
index = letraRandom(arrI) - 1;
texto = texto.replace(/i/gi, arrI[index]);

let arrO = ["0", "()", "[]"];
index = letraRandom(arrO) - 1;
texto = texto.replace(/o/gi, arrO[index]);

let arrU = ["(_)", "|_|", "L|"];
index = letraRandom(arrU) - 1;
texto = texto.replace(/u/gi, arrU[index]);

// texto = texto.replace(/b/gi, "I3");
// texto = texto.replace(/c/gi, "[");
// texto = texto.replace(/d/gi, "|)");
// texto = texto.replace(/f/gi, "/=");
// texto = texto.replace(/g/gi, "6");
// texto = texto.replace(/h/gi, "}{");
// texto = texto.replace(/j/gi, "_]");
// texto = texto.replace(/k/gi, "|<");
// texto = texto.replace(/l/gi, "|_");
// texto = texto.replace(/m/gi, "/\/\\");
// texto = texto.replace(/n/gi, "|\\|");
// texto = texto.replace(/ñ/gi, "|\\°|");
// texto = texto.replace(/p/gi, "|°");
// texto = texto.replace(/q/gi, "()_");
// texto = texto.replace(/r/gi, "|2");
// texto = texto.replace(/s/gi, "5");
// texto = texto.replace(/t/gi, "7");
// texto = texto.replace(/v/gi, "\\/");
// texto = texto.replace(/w/gi, "\\/\\/");
// texto = texto.replace(/x/gi, "><");
// texto = texto.replace(/y/gi, "`/");
// texto = texto.replace(/z/gi, "2");

console.log(texto);