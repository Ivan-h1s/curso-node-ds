//Dado un array de números sumar todos los elementos a excepción del 
//valor del centro.
let arr1 = [1, 2, 3, 4, 5]// = 12 (se elimina el 3)
let arr2 = [1, 2, 3, 4, 5, 6]// = 14 (se eliminan 3 y 4)

function mitadArray(arr) {
    let medio = Math.floor(arr.length / 2);

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr.length % 2 == 1) {//si es impar
            medio;
            return arr[medio];
        } // par
        medio;
        return arr[medio - 1] + arr[medio];
    }
}

function sumaSinMedios(arr) {
    let result = arr.reduce((a, b) => a + b, 0) - mitadArray(arr);
    return result;
}

console.log(sumaSinMedios(arr1));
console.log(sumaSinMedios(arr2));