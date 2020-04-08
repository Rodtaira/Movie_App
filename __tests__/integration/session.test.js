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

    it('should not find a user that is not in the database', async() => {
        
        test_user = {
            email: 'sbrubles@sbrubes.com',
            password: '123456'
        }

        const response = await request(app)
            .post('/sessions')
            .send(test_user)

            expect(response.status).toBe(401)
            expect(response.body.message).toBe('User not found')

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
            })
      
          expect(response.body).toHaveProperty("token");
    })

    it('should be able to access private routes when autheticated ', async () => {
        const user = await factory.create("User", {
            password: "luna123"
          });
      
          const response = await request(app)
            .get("/dashboard")
            .set('Authorization', `Bearer ${user.generateToken()}`)

          expect(response.status).toBe(200)  
    })

    it('should not be able to acces private routes without jwt token', async () => {
        const response = await request(app)
            .get('/dashboard')

        expect(response.status).toBe(401)
    })

    it('should not be able to access private routes with invalid jwt token', async() => {
        const response = await request(app)
            .get("/dashboard")
            .set('Authorization', `Bearer 1212323123`)

          expect(response.status).toBe(401)  
    })
})

