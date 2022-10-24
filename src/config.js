//? Dpendencies
require('dotenv').config()


const config = {
    port : process.env.PORT || 9000,
    nodeEnv : process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    db : {
        host: process.env.HOST || 'localhost',
        username: process.env.DB_USERS || 'postgres',
        password : process.env.DB_PASSWORD || 'root',
        dbName: process.env.DB_NAME
    }
}

module.exports = config