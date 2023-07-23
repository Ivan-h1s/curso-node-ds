//buscar el número más alto
let arr = [43, 56, 4, 15, 78, 5, 89, 33];

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i]
    }
}
console.log(max) 
