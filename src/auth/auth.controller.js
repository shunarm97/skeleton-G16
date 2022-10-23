
const {getByEmail} = require('../users/users.controllers')

const loginUser = (email, password) => {
    getByEmail(email)
    .then((response) => {

    })
    .catch((err) => {
        
    })
}