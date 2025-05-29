import request from 'supertest'
import app from '../../src/app'
import { setupDatabase, teardownDatabase } from '../setup'

beforeAll(async () => {
  await setupDatabase()
  console.log('Database setup completed.............!')
})

afterAll(async () => {
  await teardownDatabase()
  console.log('Database teardown completed.............!')
})

describe('Products API', () => {
  it("testing setup", async () => {
    expect(true).toBe(true)
  })

  it('should return a list of products', async () => {
    const response = await request(app).get('/api/products')
    // console.log('response.error.............', response.error)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ category: "Electronics", id: 1, name: 'Laptop', price: '999.99' }),
        expect.objectContaining({ category: "Books", id: 2, name: 'Novel', price: '19.99' }),
      ])
    )
  })

  it('should add a new product', async () => {
    const newProduct = { name: 'Smartphone', price: 799.99, categoryid: 1 }
    const newProductAndCategory = { category: "Electronics", id: 3, name: 'Smartphone', price: '799.99' }
    const response = await request(app).post('/api/products').send(newProduct)
    // console.log('response.error.............', response.error)
    expect(response.status).toBe(201)

    const fetchResponse = await request(app).get('/api/products')
    expect(fetchResponse.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(newProductAndCategory)
      ])
    )
  })
})
