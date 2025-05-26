import type {Config} from 'jest'

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  silent: false
}

export default config