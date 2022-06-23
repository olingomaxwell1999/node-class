//importing express
const express = require('express')

//importing router
const router = express.Router()

//Importing the user Model
const USER = require('../models/User')

router.post('/', (req,res) =>{
    const user = new USER(
        {
            title:req.body.title,
            email:req.body.email,
            password:req.body.password
        }
    )

    user.save()
    .then((user) => {
        res.json(
            {
                message: 'User has been created successfully'
            }
        )
    })
    .catch (err) 
        res.json(
            {
                message: {err}
            }
        )
    
})

module.exports = router