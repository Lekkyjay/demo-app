import { useState } from 'react'
import { Form, useLoaderData, useNavigate } from 'react-router'
import type { IProduct } from '../lib/types'

export default function Products() {
  const { products } = useLoaderData() as { products: IProduct[] }
  const navigate = useNavigate()  

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={() => navigate("create")}
        >
          Create Product
        </button>
      </div>
      <table className="min-w-full bg-grey-800 shadow-md rounded">
        <thead>
          <tr className="bg-gray-500">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-2 px-4 text-center">{product.name}</td>
              <td className="py-2 px-4 text-center">${Number(product.price).toFixed(2)}</td>
              <td className="py-2 px-4 text-center">{product.category}</td>
              <td className="py-2 px-4 space-x-2 text-center">
                <button
                  className="bg-purple-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                  onClick={() => navigate(`${product.id}`)}
                >
                  View
                </button>
                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                  onClick={() => navigate(`${product.id}/edit`)}
                >
                  Edit
                </button>
                <Form method="post" className="inline">
                  <input type="hidden" name="id" value={product.id} />
                  <button 
                    type="submit"
                    name="_action"
                    value="delete"
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </Form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-gray-300 text-gray-900 py-1 px-3 rounded hover:bg-gray-400"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-gray-300 text-gray-900 py-1 px-3 rounded hover:bg-gray-400"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}
