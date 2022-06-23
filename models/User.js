const express = require('express')

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema)