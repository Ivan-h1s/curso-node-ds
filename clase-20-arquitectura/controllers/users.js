const modelUsers = require('../models/users');

const userAdd = (firstname, lastname, email) => {
    try {
        const user = modelUsers.add(firstname, lastname, email);
        //return user;
    } catch (error) {
        console.log(error);
    }
}

const usersShow = () => modelUsers.getAll();
module.exports.userAdd = userAdd;
module.exports.usersShow = usersShow;