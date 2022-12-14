
const usersControllers = require('./users.controllers')



const getAllUsers = (req, res) => {
    usersControllers.getAllUsers()
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const getUserById = (req, res) => {
    const id = req.params.id
    usersControllers.getUserById(id)
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => {
        res.status(404).json({message : err.message})
    })
}


const resgisterUser = (req, res) => {
    const {firstName, lastName, email, phone, birthday, gender, password, country} = req.body
    if(firstName && lastName && phone && email && password && birthday) {
        usersControllers.createUser({firstName, lastName, email, phone, birthday, gender, password, country})
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
    } else {
        res.status(400).json({message : 'All fields must be complete', fields : {
            firstName: 'string',
            lastName: 'string',
            email: 'example@example.com',
            password: 'string',
            phone: '+51 123456789',
            birthday: 'YYYY/MM/DD'
        }})
    }
}


const patchUser = (req, res) => {
    const id = req.params.id
    const {firstName, lastName, phone, birthday, gender, country } = req.body

    usersControllers.updateUser(id, {firstName, lastName, phone, birthday, gender, country })
    .then((response) => {
        if(response[0]) {
            res.status(200).json(`User with id ${id}, edit succestify`)
        } else {
            res.status(404).json({message : 'Invalid ID'})
        }
    })
    .catch((err) => {
        res.status(200).json({message: err.message})
    })
}

const deleteUser = (req, res) => {
    const id = req.params.id
    usersControllers.deleteUser(id)
    .then((response) => {
        if(response) {
            res.status(204).json()
        } else {
            res.status(404).json({message:'Ivalid id'})
        }
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

//! My user services

const getMyUser = (req, res) => {
    const id = req.user.id  //? req.user contiene la informacion del token desencriptada
    usersControllers.getUserById(id)
    .then(response => {
            res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

//? se eliminara definitivamente de la base de datos
const deleteMyUser = (req, res) => {
    const id = req.user.id
    usersControllers.deleteUser(id)
    .then(() => {
        res.status(204).json()
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}


//? se quedara inactivo por si desea recuperarla
const deleteMyUserTwo = (req, res) => {
    const id = req.user.id
    usersControllers.updateUser(id, {status:'inactive'})
    .then(() => {
        res.status(201).json({message: 'Your user is inactive'})
    })
    .catch(() => {
        res.status(400).json({message: err.message})
    })
}




const patchMyUser = (req, res) => {
    const id = req.user.id
    const {firstName, lastName, phone, birthday, country, gender} = req.body

    usersControllers.updateUser(id, {firstName, lastName, phone, birthday, country, gender})
    .then(() => {
        res.status(200).json({message: 'You user is edit seccestify'})
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    patchUser,
    deleteUser,
    resgisterUser,
    getMyUser,
    deleteMyUser,
    patchMyUser,
    deleteMyUserTwo
}