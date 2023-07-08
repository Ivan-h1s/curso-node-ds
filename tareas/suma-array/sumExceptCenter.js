//Dado un array de números sumar todos los elementos a excepción del valor del centro.
//solo con reduce
let arr1 = [1, 2, 3, 4, 5]// = 12 (se elimina el 3)
let arr2 = [1, 2, 3, 4, 5, 6]// = 14 (se eliminan 3 y 4)

function sumExceptCenter(arr) {
    let centerIndex = Math.floor(arr.length / 2);
    let sum = arr.reduce((acc, item, index) => {
        if (arr.length % 2 == 1) { // si el array es IMPAR
            if (index !== centerIndex) {        
                return acc + item; 
            }
        } else { //si el array es PAR
            if (index !== centerIndex && index !== centerIndex - 1) {
                return acc + item;
            }
        }
        return acc; //devolver el valor acumulado
    }, 0);
    return sum;
}

console.log(sumExceptCenter(arr1))
console.log(sumExceptCenter(arr2))