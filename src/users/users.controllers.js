//? dependencies 
const uuid = require('uuid')
const Users = require('../models/users.models')
const { hashPassword } = require('../utils/crypto')

const getAllUsers = async () => {
    const data = Users.findAll()
    return data
}

const getUserById = async (id) => {
    const data = Users.findOne({
        where : {
            id : id
        }
    })
    return data
}

const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: data.firstName,
        lastName : data.lastName,
        email: data.email,
        password: hashPassword(data.password),
        phone: data.phone,
        birthday: data.birthday,
        gender: data.gender,
        country: data.country
    })
    return newUser
}

const updateUser = async (id, data) => {
    const response = await Users.update(data, {
        where: {
            id: id
        }
    })
    return response
}


const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id :id
        }
    })
    return data
}


const getByEmail =async (email) => {
    const response = await Users.findOne({
        where : {
            email : email
        }
    })
    return response
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    getByEmail
}