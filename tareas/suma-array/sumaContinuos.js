/* #Suma continuos
Dado un array sumar los 2 valores más altos continuos*/
let arr1 = [2, 9, 3, 6, 8, 1];// = 14 (el 6 y 8)
let arr2 = [1, 2, 1, 6, 2];// = 8 (el 6 y 2) 

/* function sumaMaxContinuos(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length - 1; i++) { //iterar hasta el penúltimo elemento
    let sumaActual = arr[i] + arr[i + 1];
        if (sumaActual > maxSum) {
            maxSum = sumaActual;
        }
    }
    return maxSum;
} */
   
const sumaMaxContinuos = (arr) => {
    let maxSum = 0;
    arr.forEach((value, index) => {
        if (index < arr.length - 1) {
            let sumaActual = value + arr[index + 1];
            if (sumaActual > maxSum) {
                maxSum = sumaActual;
            }
        }
    });
    return maxSum;
}    

console.log(sumaMaxContinuos(arr1));
console.log(sumaMaxContinuos(arr2));