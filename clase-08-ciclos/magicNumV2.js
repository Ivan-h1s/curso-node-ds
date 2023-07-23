//version de adivinarNumero con argumento. El numeroMagico cambia cada vez que se reinicia el bucle.
let numeroMagico// = Math.floor(Math.random()*6);
let intentos = 0;
let input = process.argv[2];
    
while (numeroMagico != input) {
    intentos ++;
    numeroMagico= Math.floor(Math.random()*11);
    console.log("Número mágico", numeroMagico);//solo para tener un seguimiento
    if (numeroMagico == input) {
        console.log(`Bravo! El número mágico era el ${numeroMagico} y adivinaste en ${intentos} intentos`);
        //break;
    } else if (numeroMagico > input){
        console.log(`El número mágico es mayor que el número ${input} ingresado.`);//break
    } else if (numeroMagico < input){
        console.log(`El número mágico es menor que el número ${input} ingresado.`);   //break
    }
}