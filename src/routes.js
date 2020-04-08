const routes    = require('express').Router()

const AuthMiddleware    = require('./app/middleware/auth')
const SessionController = require('./app/controllers/SessionController')

routes.post('/sessions', SessionController.storeUser)

routes.use(AuthMiddleware)

routes.get('/dashboard', (req, res) => {
    return res.status(200).send()
})

module.exports = routes