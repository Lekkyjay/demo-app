import * as shell from 'shelljs'
import * as path from 'path'
import * as fs from 'fs'
import dotenv from 'dotenv'

// Load environment variables
const envPath = path.resolve(__dirname, '../.env')
if (!fs.existsSync(envPath)) {
  console.error('.env file not found. Please create one in the root directory.')
  process.exit(1)
}
dotenv.config({ path: envPath })

console.log('Setting up the production environment...')

try {
  console.log('Starting Docker containers...')
  shell.exec('docker compose up -d --build')
  console.log('Production environment setup complete. Access the app at http://localhost:8080')
} 
catch (error) {
  console.error('An error occurred during setup:', error)
  process.exit(1)
}
