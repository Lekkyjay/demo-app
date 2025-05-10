import { Form } from 'react-router'

export default function CreateProduct() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>
      <Form method="post">
        <div className="mb-4">
          <label className="block mb-2 font-bold">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Price</label>
          <input
            type="number"
            name="price"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Category</label>
          <input
            type="text"
            name="category"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          name="_action"
          value="create"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Create Product
        </button>
      </Form>
    </div>
  )
}
