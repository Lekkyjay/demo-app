import pool from '../src/config/dbConn'

export const setupDatabase = async () => {
  // await pool.connect()

  await pool.query(`
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    )
  `)

  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      price NUMERIC NOT NULL,
      categoryid INTEGER REFERENCES categories(id)
    )
  `)

  // Insert test data
  await pool.query(`INSERT INTO categories (name) VALUES ('Electronics'), ('Books')`)
  await pool.query(`INSERT INTO products (name, price, categoryid) VALUES 
    ('Laptop', 999.99, 1),
    ('Novel', 19.99, 2)
  `)

  // await pool.end()
}

export const teardownDatabase = async () => {
  // await pool.connect()
  await pool.query(`DROP TABLE IF EXISTS products`)
  await pool.query(`DROP TABLE IF EXISTS categories`)
  await pool.end()
}
