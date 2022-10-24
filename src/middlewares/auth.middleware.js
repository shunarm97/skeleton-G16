//? Middleware para proteger rutas 


const { jwtSecret } = require('../config')
const { getUserById } = require('../users/users.controllers')

//* 1.- revisar si existe un token
//* 2.- verificar si el token pertenece a un usuario valido
//* 3.- modificar el req y agregar req.user con la informacion desencriptada del token 


//? estrategia: diferente maneras de hacer un login(facebook, google, JWT, Github)

const JwtStrategy = require('passport-jwt').Strategy  
//? Passport maneja estrategia para las diferentes autenticaciones
const ExtractJwt = require('passport-jwt').ExtractJwt 
//? Extrae los headers de la peticion


//? Exportando funcion anonima
module.exports = (passport) => {
    const options = {
        jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: jwtSecret
    }
    passport.use(
        new JwtStrategy(options, async (decoded, done) => {
            try {
                const response = await getUserById(decoded.id) 
                if(!response) {
                    return done(null, false)
                }
                console.log('decoded JWT', decoded)
                return done(null, decoded)
            } catch (error) {
                return done(error, false)
            }
        })
    )
}