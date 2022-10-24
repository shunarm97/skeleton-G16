const router = require('express').Router()
const { session } = require('passport')
const passport = require('passport')

const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)

//? rutas raiz

router.get('/', userServices.getAllUsers)
    




//? ruta de informacion propia del usuario logeado
router.route('/me')
        .get(
            passport.authenticate('jwt', {session: false}),
            userServices.getMyUser)
        .patch(
            passport.authenticate('jwt', {session:false}),
            userServices.editMyUser)
        .delete(
            passport.authenticate('jwt', {session:false}),
            userServices.deleteMyUser)


        


         
//? rutas dinamicas por ID 
router.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)

    module.exports = router