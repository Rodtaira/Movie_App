const routes    = require('express').Router()
const {User}    = require('./app/models')

User.create({
    name: 'Jorge Popo', 
    email: 'jorge@popo.com.br', 
    password_hash: '432345' 
})

module.exports = routes