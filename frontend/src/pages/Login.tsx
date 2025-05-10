import { Form, useNavigate } from 'react-router'
import { useAuth } from '../hooks/authContext'

export default function Login() {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    auth.login(username, password)
    navigate('/')
  }

  return (
    <div className="max-w-sm mx-auto mt-20 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Username</label>
          <input
            type="text"
            name="username"
            value='Lekky'
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Password</label>
          <input
            type="password"
            name="password"
            value='pw123'
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </Form>
    </div>
  )
}