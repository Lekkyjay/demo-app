import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './pages/Categories'
import ProductDetails from './pages/ProductDetails'
import EditProduct from './pages/EditProduct'
import CreateProduct from './pages/CreateProduct'
import Layout from './components/Layout'
import { fetchCategories, fetchProductById, fetchProducts } from './lib/loaders'
import { handleProductAction } from './lib/actions'
import ErrorBoundary from './components/ErrorBoundary'
import ProtectedRoutes from './components/ProtectedRoutes'
import './index.css'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'products', element: <Products />, loader: fetchProducts },
      { path: 'categories', element: <Categories />, loader: fetchCategories },
      { path: 'products/:productId', loader: fetchProductById, element: <ProductDetails /> },
      { path: '', element: <ProtectedRoutes />, children: [
        { path: 'products/create', action: handleProductAction, element: <CreateProduct /> },
        { path: 'products/:productId/edit', loader: fetchProductById, action: handleProductAction, element: <EditProduct /> },
      ] }      
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
