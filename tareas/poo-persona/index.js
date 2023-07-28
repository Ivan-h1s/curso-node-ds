//llamo a la depedencia
const { faker } = require('@faker-js/faker');

//crea un objeto tipo persona con valores aleatorios
const crearPersonaRandom = () => ({
    nombre: faker.person.firstName(),
    apellido: faker.person.lastName(),
    edad: faker.number.int({min: 1, max: 10}),
    colorFavorito: faker.color.human()
});

//le pasamos la cantidad de objetos a crear por argumento y sino por defecto crea 3
let cantidadObjetosCrear = parseInt(process.argv[2]) || 3;

//iniciamos un array y crea la cantidad de objetos según el argumento que le pasamos o no
const arrayPers = [] = faker.helpers.multiple(crearPersonaRandom, {count: cantidadObjetosCrear});

console.log("Total de personas evaluadas: \n", arrayPers);//imprimo solo para chequear si funca el programita

const mayorEdad = (arr) => {
    let adulto = arr.filter(e => e.edad > 17);    
    console.log("-------------------------------------------------------------------------------------------");
    
    console.log(!adulto.length  ? "NO HAY MAYORES DE EDAD!" : "MAYORES DE EDAD: \n", adulto);    

    let estadistica = `\nTotal de personas evaluadas = ${arr.length} \nMayores de edad = ${adulto.length} \nMenores de edad = ${arr.length - adulto.length}`;
    return estadistica; 
}
console.log(mayorEdad(arrayPers));