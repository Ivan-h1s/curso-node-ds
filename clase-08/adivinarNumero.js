/*version de adivinarNumero con prompt. El numeroMagico NO cambia cada vez que se reinicia el bucle.
npm init -y 
npm install prompt-sync 
*/
function adivinarNumero() {
    const prompt = require('prompt-sync')();
    const numeroMagico = Math.floor(Math.random()*11);
    let intentos = 0;
    console.log("Número mágico", numeroMagico);

    while (true) {
        const input = parseInt(prompt("Ingrese un número de 0 a 10: "));
        intentos ++;

        if (numeroMagico == input) {
            console.log(`Bravo! El número mágico era el ${numeroMagico} y adivinaste en ${intentos} intentos`);
            break;
        } else if (numeroMagico > input){
            console.log(`El número mágico es mayor que el número ${input} ingresado.`);
        } else {
            console.log(`El número mágico es menor que el número ${input} ingresado.`);   
        }
    }
}
adivinarNumero();