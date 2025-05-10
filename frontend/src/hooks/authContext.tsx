import React, { createContext, useState, useContext } from 'react'

interface AuthContextType {
  user: string
  login: (userName: string, password: string) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Login function
  const login = (userName: string, password: string) => {
    if (userName === 'Lekky' && password === 'pw123') {
      setIsAuthenticated(true)
      setUser(userName)
    } 
    else {
      alert('Invalid credentials')
    }
  }

  // Logout function
  const logout = () => {
    setIsAuthenticated(false)
    setUser('')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
