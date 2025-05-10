import { useLoaderData } from 'react-router'
import type { IProduct } from '../lib/types'

export default function ProductDetails() {
  const { product } = useLoaderData() as { product: IProduct }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${Number(product.price).toFixed(2)}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  )
}