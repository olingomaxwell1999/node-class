//imorting express
const express = require('express')

//importing mongoose
const mongoose = require('mongoose')

//importing dotenv
require('dotenv/config')

//using express
const app = express()

//importing body-parser
const bodyParser = require('body-parser')

//importing port from dotenv
const Port = process.env.PORT || 7000

//Importing the create user Route
const createUserRoute = require('./routes/user')

//Base route
app.get('/', (req,res) => {
    res.send('Welcome to node js')
})

//using the body parser
app.use(bodyParser.json())

//Using our Routes
app.use('/createUser', createUserRoute)

//connecting to the database
mongoose.connect(process.env.MONGO_URL, {}, (req,res) => {
    console.log('Connected to database!!!')
})

//starting the server
app.listen(Port, () => console.log(`Server is running on port: ${Port}`))