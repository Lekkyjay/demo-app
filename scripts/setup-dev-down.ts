import * as shell from 'shelljs'

// Stop Docker containers
try {
  console.log('Stopping and removing Docker containers...')
  shell.exec('docker compose -f ../compose-dev.yml down -v')
  console.log('Docker containers stopped and removed')
} 
catch (error) {
  console.error('An error occurred during compose down:', error)
  process.exit(1)
}
