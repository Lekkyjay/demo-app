import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductList from './pages/ProductList'
import Categories from './pages/Categories'
import ProductDetails from './pages/ProductDetails'
import EditProduct from './pages/EditProduct'
import CreateProduct from './pages/CreateProduct'
import Layout from './components/Layout'
import { categoriesLoader, fetchProductById, fetchProducts, productsLoader, userListLoader, userLoader } from './lib/loaders'
import { handleProductAction } from './lib/actions'
import ErrorBoundary from './components/ErrorBoundary'
import ProtectedRoutes from './components/ProtectedRoutes'
import './index.css'
import Login from './pages/Login'
import { UserProfile } from './pages/UserProfile'
import { UserList } from './pages/UserList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '', element: <Home /> },
      { path: 'user', loader: userLoader, element: <UserProfile /> },
      { path: 'users', loader: userListLoader, element: <UserList /> },
      { path: 'login', element: <Login /> },
      { path: 'productss', element: <ProductList />, loader: fetchProducts },
      { path: 'products', element: <Products />, loader: productsLoader },
      { path: 'categories', element: <Categories />, loader: categoriesLoader },
      // { path: 'categories', element: <Categories />, loader: fetchCategories },
      // { path: 'categories', element: <Categories />, loader: categoriesLoader },   //c-gpt
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
