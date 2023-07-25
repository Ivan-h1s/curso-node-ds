//npm install @faker-js/faker --save-dev
const { faker } = require('@faker-js/faker');

//crea un objeto tipo persona con valores aleatorios
const crearPersonaRandom = () => ({
    nombre: faker.person.firstName(),
    apellido: faker.person.lastName(),
    edad: faker.number.int({min: 1, max: 100}),
    colorFavorito: faker.color.human()
});

//node index.js 5 le pasamos la cantidad de objetos a crear y sino por defecto crea 3
let cantidadObjetosCrear = parseInt(process.argv[2]) || 3;

//iniciamos un array y en count ponemos la cantidad de objetos a crear
const arrayPers = [] = faker.helpers.multiple(crearPersonaRandom, {count: cantidadObjetosCrear})

console.log(arrayPers);//imprimo solo para chequear si funca el programita

//si no hay adultos imprime un mensaje negativo y sino imprime un array de objetos con los que cumplen la condición.
const mayorEdad = (arr) => {
    console.log("============================");
    let adulto = arr.filter(e => e.edad > 17);    
    
    if (adulto.length === 0) {
        return " No hay mayores de edad!!!";
    } else {
        console.log(" Lista de mayores de edad: "); 
        return adulto;
    }
}
console.log(mayorEdad(arrayPers));