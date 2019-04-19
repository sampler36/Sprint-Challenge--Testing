const request = require('supertest');

const server = require('./server')

describe('server', () => {
    it('should set the testing env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('GET /', () => {
        it('should return 200', () => {
            return request(server)
                   .get('/')
                   .then(res => {
                       expect(res.status).toBe(200);
                   })
        })
        it('should return 200 with an async', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200)
        })
        it('should return JSON with an async', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json')
        })
        it('should return {May: The games Begin} in body', async () => {
            const res = await request(server).get('/');
            expect(res.body.May).toEqual('The games Begin')
        })
    })
})
//  we will use supertest to test HTTP status code /shape/body/format of data
