const Sequelize = require('sequelize');
let sequelize;

const config = {
    "username": "root",
    "password": "admin",
    "database": "dash",
    "port": 3306,
    "host": "localhost",
    "dialect": "mysql",
    "logging": true
}

sequelize = new Sequelize({
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: config.logging
});

module.exports = sequelize;
