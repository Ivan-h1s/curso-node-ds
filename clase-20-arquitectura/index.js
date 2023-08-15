const users = require('./controllers/users');

users.userAdd("otro", "sego", "das@das.com");
users.userAdd("pepe", "lui", "pepe@pepe.com");
users.userAdd("dibu", "martinez", "dibu@dibu.com");
users.userAdd("lolo", "Men", "das@das.com");
users.userAdd("walter", "white", "breaking@.bad.com");

console.log(users.usersShow());