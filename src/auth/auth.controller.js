
const {getByEmail} = require('../users/users.controllers')
const {comparePassword} = require('../utils/crypto')


const loginUser = async (email, password) => {
    try {
        const response = await getByEmail(email)
        const verifyPassword = comparePassword(password, response.password)
        if(verifyPassword) {
            return response
        } else {
            return false
        }
    }
    catch (err) {
        return false
    }  
}

// loginUser('alex123@gmail.com', 'root')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

module.exports = {
    loginUser
}