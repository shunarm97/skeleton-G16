const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')

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
            userServices.patchMyUser)
        .delete(
            passport.authenticate('jwt', {session:false}),
            userServices.deleteMyUser)
        .patch(
            passport.authenticate('jwt', {session: false}),
            userServices.deleteMyUserTwo)

 
        


         
//? rutas dinamicas por ID 
router.route('/:id')
    .get(userServices.getUserById)
    .patch(
        passport.authenticate('jwt', {session:false}),
        adminValidate,
        userServices.patchUser)
    .delete(
        passport.authenticate('jwt', {session:false}),
        adminValidate,
        userServices.deleteUser)

    module.exports = router


    

