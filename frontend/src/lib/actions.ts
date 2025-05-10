import { redirect } from 'react-router'
import type { ActionFunction } from 'react-router'

// Mock database
const mockDatabase = {
  products: [
    { id: "1", name: "Laptop", price: 999.99, category: "Electronics" },
    { id: "2", name: "Chair", price: 49.99, category: "Furniture" },
    { id: "3", name: "Coffee Mug", price: 9.99, category: "Kitchen" },
  ],
  categories: ["Electronics", "Furniture", "Kitchen", "Books"],
}

export const handleProductAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const action = formData.get("_action")
  const id = formData.get("id")?.toString()
  const name = formData.get("name")?.toString()
  const price = parseFloat(formData.get("price")?.toString() || "0")
  const category = formData.get("category")?.toString()

  switch (action) {
    case "create":
      if (name && category) {
        const newProduct = {
          id: (mockDatabase.products.length + 1).toString(),
          name,
          price,
          category,
        }
        mockDatabase.products.push(newProduct)
      }
      console.log('new products', mockDatabase.products)
      return redirect("/products")

    case "edit":
      const product = mockDatabase.products.find((p) => p.id === id)
      if (product && name && category) {
        product.name = name
        product.price = price
        product.category = category
      }
      console.log('edited product', product)
      return redirect("/products")

    case "delete":
      mockDatabase.products = mockDatabase.products.filter((p) => p.id !== id)
      return redirect("/products")

    default:
      throw new Error("Unknown action")
  }
}