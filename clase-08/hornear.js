//function hornear (totalGalletitas, capacidadBandeja) {
    const totalGalletitas = process.argv[2]
    const capacidadBandeja = process.argv[3]

    let cantHorneadas = 0;

    for (let i = 1; i <= totalGalletitas; i++) {
        if (i % capacidadBandeja === 0) {
            cantHorneadas ++;
        }        
    }
    if (totalGalletitas % capacidadBandeja !== 0) {
        cantHorneadas += 1;
    }
    console.log(`Para ${totalGalletitas} galletitas hay que hornear ${cantHorneadas} veces.`);
//}

//ejecutar node hornear.js 50 12

/*
console.log(hornear(33, 10));
console.log(hornear(80, 10));
console.log(hornear(81, 10));
console.log(hornear(89, 10));
console.log(hornear(90, 10));
console.log(hornear(100, 20));*/