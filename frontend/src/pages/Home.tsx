export default function Home() {
  const API_URL = import.meta.env.VITE_API_URL || '/api'

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">Welcome to the Product Management App!!!!!!!</h2>
      <p className="mt-4 text-lg">Manage your products and categories efficiently.</p>
      <p>API URL: {API_URL}</p>
    </div>
  )
}