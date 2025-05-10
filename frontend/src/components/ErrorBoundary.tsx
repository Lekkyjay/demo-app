import { useRouteError } from 'react-router'
import Navbar from './Navbar'
import type { IError } from '../lib/types'

export default function ErrorBoundary() {
  const error = useRouteError() as IError

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="p-6">
        <h1><b>Error Message: </b>{error.message}</h1>
        <pre><b>Error Status: </b> {error.status} - {error.statusText}</pre>
      </main>
    </div>
  )
}
