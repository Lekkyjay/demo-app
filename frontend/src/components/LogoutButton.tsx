import { useAuth } from '../hooks/authContext'

export default function LogoutButton() {
  const { logout } = useAuth()
  
  return <button onClick={() => logout()}>Logout</button>
}