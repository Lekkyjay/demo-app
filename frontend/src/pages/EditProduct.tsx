import { Form, useLoaderData } from 'react-router'
import type { IProduct } from '../lib/types'

export default function EditProduct() {
  const { product } = useLoaderData() as { product: IProduct }
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <Form method="post">
        <input type="hidden" name="id" value={product.id} />
        <div className="mb-4">
          <label className="block mb-2 font-bold">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={product.name}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={product.price}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={product.category}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          name="_action"
          value="edit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </Form>
    </div>
  )
}
