const {factory} = require('factory-girl')
const {User} = require('../src/app/models')

factory.define('User', User, {
    name : 'Luna', 
    email: 'luna@katrina.com', 
    password: 'luna123'
})

module.exports = factory