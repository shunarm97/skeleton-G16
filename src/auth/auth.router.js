//? Auth va a contener las rutas de autorizacion y autenticacion
//* Login
//* Register
//* Recovery Password
//* Verify User

const {resgisterUser} = require('../users/users.services')
const authServices =  require('./auth.services')
const router  = require('express').Router()


//? /api/v1/auth
router.post('/register', resgisterUser)

router.post('/login', authServices.login)

module.exports = router