const router = require('express').Router()
const passport = require('passport')

const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)

//? rutas raiz

router.get('/', 
        passport.authenticate('jwt', {session: false}), 
        userServices.getAllUsers)
    




//? rutas dinamicas por ID 

router.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)



    module.exports = router