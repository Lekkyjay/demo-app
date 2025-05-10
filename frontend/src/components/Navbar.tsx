import { Link } from 'react-router'
import { useAuth } from '../hooks/authContext'

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <header className="bg-blue-500 p-4 text-white">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Product Management App</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">Products</Link>
            </li>
            <li>
              <Link to="/categories" className="hover:underline">Categories</Link>
            </li>
            {isAuthenticated 
            ? (
                <li className='flex space-x-4'>                  
                  <span className='bg-blue-900 text-white px-2 py-1 rounded-2xl cursor-pointer' onClick={() => logout()}>
                    Logout
                  </span>
                  <span className='bg-blue-900 text-white px-2 py-1 rounded-2xl'>Hello {user}!</span>
                </li>
              )
            : (
                <li className='bg-blue-900 hover:bg-blue-600 text-white p-1'>
                  <Link to="/login" className="hover:underline">Login</Link>
                </li>
              )
          }
          </ul>
        </nav>
      </header>
  )
}