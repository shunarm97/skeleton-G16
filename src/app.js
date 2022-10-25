//? Dependencies
const express = require('express');
const db = require('./utils/database')

//? initial configs
const app = express()

//? Files
const {port} = require('./config')

//* Routes
const usersRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const initModels = require('./models/initmodels')

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

initModels()


app.get('/',(req,res) => {
        res.status(200).json({
            message: 'all OK!',
            users: `localhost:${port}/api/v1/users`
        })
    })
    

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/auth', authRouter)



app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})