// En el rango de 0 a 10000 la idea es que la máquina encuentre un número ingresado por el usuario desde la consola en la menor cantidad de intentos posibles
// node buscar.js 175 

let input = parseInt(process.argv[2]); 
let min = 1;
let max = 10000;
let adivino;
let intento = 0;

while (input !== adivino) {
    intento++;
    adivino = Math.floor((max + min)/2);
    console.log("min:", min, ", max:", max, ", adivino:", adivino)
    if (adivino == input || input == min || input == max) {
        console.log(`El número ${input} se encontró luego de ${intento} vueltas.`);
        break;
    }
    if (adivino < input){
        min = adivino + 1;
    } else {
        max = adivino - 1;
    }
}

//VERSION CON ARRAY
/* let arr = [];
for (let i = 1; i <= 10000; i++) {
    arr.push(i);        
}

let input = process.argv[2];    
let min = 0;
let max = arr.length - 1;
let adivino;
let intento = 0;

while (input !== adivino) {//(arr[adivino] != input) {
    intento++;
    adivino = Math.floor((min + max) / 2);
    console.log("arr[min]: ", min, "arr[max]: ", max, "arr[adivino]: ", adivino);
    if (arr[adivino] == input) {
        console.log(`El número ${input} se encontró luego de ${intento} vueltas.`);
        break;
    } else if (arr[adivino] < input) {
        min = adivino + 1;
    } else { //if (arr[adivino] > input)
        max = adivino - 1;
    }
} */