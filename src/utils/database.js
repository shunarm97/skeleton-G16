const { Sequelize } = require("sequelize");
const config = require('../config')

const db = new Sequelize({
    dialect:'postgres', 
    host: config.db.host,          //? variable de entorno del host
    username: config.db.username,  //? variable de entorno del usuario
    password: config.db.password,  //? variable de entorno de la contraseña 
    database: config.db.dbName     //? variable de entorno de la base de entorno

})

module.exports = db