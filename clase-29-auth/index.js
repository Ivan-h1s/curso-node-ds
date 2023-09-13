const bcrypt = require('bcrypt');

let misPass = "pepito123";

bcrypt.genSalt(10)
    .then(salt => {
        return bcrypt.hash(misPass, salt);
    })
    .then(passHashed => {
        console.log("mi pass promises: ", passHashed);
        return bcrypt.compare(misPass, passHashed);
    })
    .then(comparePass => {
        console.log("comparePass promises: ", comparePass);
    })
    .catch(error => {
        console.log(error);
    });

async function hashPassword() {
    try {
        const salt = await bcrypt.genSalt(10);
        const passHashed = await bcrypt.hash(misPass, salt);
        console.log("mi pass async: ", passHashed);

        const compare1 = await bcrypt.compare(misPass, passHashed);
        console.log("compare async: ", compare1);
        const compare2 = await bcrypt.compare("otropepito", passHashed);
        console.log("compare async: ", compare2);
    } catch (error) {
        console.error(error);
    }
}
hashPassword();