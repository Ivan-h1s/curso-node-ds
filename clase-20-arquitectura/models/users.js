const fs = require('node:fs');

let users = [];
try {
    const data = fs.readFileSync('./users.txt', 'utf8');
    users = Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
} catch (error) {
    console.error(error);
}

const add = (firstname, lastname, email) => {
    try {
        const user = {
            firstname : firstname,
            lastname : lastname,
            email : email
        }
        users.push(user);
        save(JSON.stringify(users));
        return users;
    } catch (error) {
        console.error(error);
    }
}

const getAll = () => users;

const save = (content) => {
    try {
        fs.writeFileSync('./users.txt', content);
        return true;
    } catch (error) {
        return false;
    }
}
module.exports.add = add;
module.exports.getAll = getAll;
