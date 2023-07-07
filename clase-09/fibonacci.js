/* Escribe un script que comience con una variable llamada hasta y cree un array con los primeros números 
de la secuencia de Fibonacci. La secuencia de Fibonacci siempre comienza con los números 0 y 1, y cada  
número subsiguiente se calcula sumando los dos números anteriores.

Ejemplos:
hasta = 3 resultado [0, 1, 1] // suma 0 + 1 para obtener la última posición 
hasta = 4 resultado [0, 1, 1, 2] // suma 1 + 1 para obtener la última posición 
hasta = 5 resultado [0, 1, 1, 2, 3] // repite lógica anterior 
hasta = 6 resultado [0, 1, 1, 2, 3, 5]
hasta = 7 resultado [0, 1, 1, 2, 3, 5, 8]
*/
let hasta = 6; //[0, 1, 1, 2, 3, 5]

function fibo(n) {
    if(n <= 1) {
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

function mostrarSerie(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(fibo(i));        
    }
    return arr;
}

console.log(mostrarSerie(hasta));