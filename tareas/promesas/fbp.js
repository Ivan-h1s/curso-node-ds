/* Realiza un ejercicio de fizzbuzz con promesas.
Toda validación de cada número debe ser realizado por una función que retorne una promesa.
Validaciones: 
*   Sí es múltiplo de 3 debe decir fizz
*   Sí es múltiplo de 5 debe decir buzz
*   Sí es múltiplo de 3 y 5 debe decir fizzbuzz
*   Sí no cumple con ninguna de las condiciones anteriores debe mostrar el número */
console.log("FizzBuzz con promesas");

const fizzBuzzPromesas = (n) => new Promise((resolve, reject) => {    
    setTimeout(() => {
        const valor = (n % 15 === 0) ? "fizzBuzz" : (n % 3 === 0) ? "fizz" : (n % 5 === 0) ? "buzz" : n;
        if (valor) {
            resolve(valor);
        } else {
            reject("No se resolvió la promesa.")
        } 
    }, 500);    
})

console.log("Loading ...");

const promesita = [];

let to = parseInt(process.argv[2]) || 100; // if (!to) { to = 100; }

for (let i = 1; i <= to; i++) {
    promesita.push(fizzBuzzPromesas(i));
}
 
Promise.allSettled(promesita)
    //.then((values) => values.forEach((value) => console.log(value)))//imprime cada objeto
    .then(values => console.log(values))//imprime el array con sus objetos
//
/* const fizzBuzzAsync = async () => { 
    try {
        for (let i = 1; i <= to; i++) {
            //if (promesita.indexOf(randomNumber()) == -1) {
                promesita.push(fizzBuzzPromesas(i));
            //}
        }
        const values = await Promise.allSettled(promesita);
        values.forEach((value) => console.log(value));    
    } catch (error) {
        console.error('Error:', error);
    }      
}
fizzBuzzAsync(); */