//? Dependencies
const express = require('express');
const db = require('./utils/database')

//? initial configs
const app = express()

//? Files
const {port} = require('./config')

//* Routes
const usersRouter = require('./users/users.router')

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('Data Base Ahutenticate')
    } )
    .catch(() => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Data Base Synced')
    })
    .catch((err) => {
        console.log(err)
    })

// app.use('/', (req, res, next) => {
//     if(req.method !== 'GET') {
//         console.log('Se esta ejecutando un middleware', req.method)
//         next()
//     } else {
//         res.status(400).json({message: 'realizaste una peticion GET'})
//     }
// }, (req,res) => {
//     res.status(200).json({
//         message: 'all OK!',
//         users: `localhost:${port}/api/v1/users`
//     })
// })

app.get('/',(req,res) => {
        res.status(200).json({
            message: 'all OK!',
            users: `localhost:${port}/api/v1/users`
        })
    })
    

app.use('/api/v1/users', usersRouter)



app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})