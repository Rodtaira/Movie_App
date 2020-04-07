const request   =   require('supertest')
const app       =   require('../../src/app')
const {User}    =   require('../../src/app/models')
const truncate  =   require('../utils/truncate')
const factory   =   require('../factories') 

describe('Authentication', () => {
    beforeEach( async () => {
        await truncate()
    })

    it('should authenticate with valid credentials', async () => {
        const user = await factory.create('User', {
            password: 'luna123'
        })

        test_user = {
            email: user.email,
            password: 'luna123'
        }

        const response = await request(app)
            .post('/sessions')
            .send(test_user)

        expect(response.status).toBe(200)
    })

    it('should not authenticate with invalid credentials', async () => {
        const user = await factory.create('User', {
            password: 'luna123'
        })

        const test_user = {
            email: user.email, 
            password: "luna1234"
        }
    
        const response = await request(app)
            .post('/sessions')
            .send(test_user)

            expect(response.status).toBe(401)
    })

    it('should return jwt token when authenticated', async () => {
        const user = await factory.create("User", {
            password: "luna123"
          });
      
          const response = await request(app)
            .post("/sessions")
            .send({
              email: user.email,
              password: "luna123"
            });
      
          expect(response.body).toHaveProperty("token");
    })
})

