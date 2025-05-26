import request from 'supertest'
import app from '../../src/app'

describe('GET /health', () => {
  it('should return 200 and a status message', async () => {
    const response = await request(app).get('/api/healthcheck')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ status: 'OK' })
  })
})
