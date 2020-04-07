const request = require('supertest')
const app = require('../../src/app')
const {User} = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('Authentication', () => {
    beforeEach( async () => {
        await truncate()
    })

    it('should authenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Luna', 
            email: 'luna@katrina.com.br', 
            password: 'luna123'
        })

     
        test_user = {
            email: 'luna@katrina.com.br',
            password: 'luna123'
        }

        const response = await request(app)
            .post('/sessions')
            .send(test_user)

        expect(response.status).toBe(200)
    })

    it('should not authenticate with invalid credentials', async () => {
        const user = await User.create({
            name: "Luna", 
            email: "luna@katrina.com.br", 
            password: "luna123"
        })

    
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email, 
                password: "luna1234"
            })

            expect(response.status).toBe(401)
    })

    // it('should return jwt token when authenticated', async () => {

    // }


})

