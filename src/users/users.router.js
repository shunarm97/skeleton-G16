const router = require('express').Router()


const userServices = require('./users.services')

//? rutas raiz

router.route('/')
    .get(userServices.getAllUsers)
    




//? rutas dinamicas por ID 

router.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)



    module.exports = router