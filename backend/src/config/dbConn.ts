import { Pool } from 'pg'

let connectionString

if (process.env.NODE_ENV === 'test') {  
  connectionString = 'postgresql://test:test123@localhost:5432/testdb'
} 
else {  
  connectionString = process.env.DATABASE_URL
} 

const pool = new Pool({ connectionString })

pool.on('connect', () => console.log('connected to the database'))
pool.on('error', (err) => console.error('error connecting to the database', err))
pool.on('remove', () => console.log('client removed'))

export default pool