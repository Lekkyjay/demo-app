import type { LoaderFunction, LoaderFunctionArgs } from 'react-router'
import { getCategories, getProductDetails, getProducts } from './services'

export const fetchProducts: LoaderFunction = async () => {
  return { products: await getProducts() }
}

export const fetchProductById: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const id = params.productId
  return { product: await getProductDetails(id as string) }
}

export const fetchCategories: LoaderFunction = () => {
  return { categories: getCategories() }
}
