const bcrypt = require('bcrypt')

const  hashPassword = (plainPassword) => {
     return bcrypt.hashSync(plainPassword, 10)
}

const comparePassword = (plainPassword, hashedPassword) => {
     //! esta utilidad se usa cuando hacemos un login y recibimos la 
     //! contraseña del usuaro y la comparamos con la base de datos
     return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
     comparePassword,
     hashPassword
}