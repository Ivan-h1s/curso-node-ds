if (!process.argv[2]) {
    console.log("No ingresó texto!");
    process.exit(1);
}

const texto = process.argv[2];
const regSuma = /(suma|agreg)/i;

if (!regSuma.test(texto)) {
    console.log("Este programa solo realiza operaciones de suma de dos números");
    process.exit(1);
}

const regNumeros = /-?\b\d+(?:\.\d+)?\b/g;
const matches = texto.match(regNumeros);

if (matches.length !== 2) {
    console.log("Este programa solo suma dos números.");
    process.exit(1);
}

const n1 = parseFloat(matches[0]);
const n2 = parseFloat(matches[1]);

console.log(`El resultado de ${n1} + ${n2} es ${n1 + n2}`);