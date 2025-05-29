import * as shell from 'shelljs';
import * as path from 'path';
import * as fs from 'fs';
import dotenv from 'dotenv';

//this file is not used in the project. it is just for reference

// Load environment variables
const envPath = path.resolve(__dirname, '../.env.test');
if (!fs.existsSync(envPath)) {
  console.error('.env.test file not found. Please create one in the root directory.');
  process.exit(1);
}
dotenv.config({ path: envPath });

console.log('Setting up the testing environment...');

try {
  // Start Docker containers for testing
  console.log('Starting Docker containers...');
  shell.exec('docker compose -f ../compose-dev.yml up -d --build')
  // shell.exec('docker-compose -f docker-compose.yml -f docker-compose.test.yml up --build -d');

  // Run backend tests
  console.log('Running backend tests...');
  shell.exec('docker exec -it $(docker ps -q -f name=backend) pnpm test');

  // Run frontend tests
  console.log('Running frontend tests...');
  shell.exec('docker exec -it $(docker ps -q -f name=frontend) pnpm test');

  // Tear down testing environment
  console.log('Tearing down testing environment...');
  shell.exec('docker compose -f ../compose-dev.yml down');
  // shell.exec('docker-compose -f docker-compose.yml -f docker-compose.test.yml down');

  console.log('Testing complete!');
} 
catch (error) {
  console.error('An error occurred during testing:', error);
  process.exit(1);
}
