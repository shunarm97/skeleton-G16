
const jwt = require('jsonwebtoken')

const {loginUser} = require('./auth.controller')

const login = (req, res) => {
    const {email, password} = req.body

    if(email && password){
        loginUser(email, password)
            .then(response => {
                if(response) {
                    const token = jwt.sign({
                        id: response.id,
                        email: response.email,
                        role: response.role
                    }, 'academlo')
                    res.status(200).json({message:'Correct Credentials', token})
                } else {
                    res.status(401).json({message: 'Inavalid Credentials'})
                }
            })
            .catch(err => {

            })
    } else {
        return res.status(400).json({message: 'Missing Data'})
    }
        
}


module.exports = {
    login
}



