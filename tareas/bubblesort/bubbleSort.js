// Enunciado del ejercicio: Implementación del algoritmo Bubble Sort
// El objetivo de este ejercicio es implementar el algoritmo de ordenamiento Bubble Sort. El Bubble Sort es un algoritmo simple que ordena una lista de elementos comparando pares adyacentes y realizando intercambios si es necesario.
// El objetivo es utilizar el mismo array por lo que está prohibido utilizar un array auxiliar
let arr = [1, 4, 2, 5, -2, 3];
//arr.sort((a, b) => a - b);

let cambio = true;
while (cambio) {
    cambio = false;
    for (let i = 0; i < arr.length; i++) { // [4, 2]
        if(arr[i] > arr[i + 1]) { //4 > 2 cumple la condicion                      
            let aux = arr[i];    //aux = 4            
            arr[i] = arr[i + 1];  //a arr[i] asigno el valor de 2, pero arr[i + 1] sigue valiendo 2
            arr[i + 1] = aux;// asigno el valor de aux a arr[i+1]
            cambio = true;
        }   
    }
}
console.log(arr);