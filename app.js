require('dotenv').config();
//con esto ya optengo los puertos

const Server = require('./models/server');

const server = new Server();

server.listen();