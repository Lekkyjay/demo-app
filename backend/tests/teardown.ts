import pool from '../src/config/dbConn'

export const teardownDatabase = async () => {
  await pool.query(`DROP TABLE IF EXISTS products`)
  await pool.query(`DROP TABLE IF EXISTS categories`)
  await pool.end()
}
