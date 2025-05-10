import express from 'express'
import cors from 'cors'
import productRoutes from './routes/products'
import categoryRoutes from './routes/categories'
import { healthCheck } from './controllers/health-check'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/healthcheck', healthCheck)
app.use('/api', productRoutes)
app.use('/api', categoryRoutes)

export default app