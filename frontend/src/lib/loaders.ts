import type { LoaderFunction, LoaderFunctionArgs } from 'react-router'
import { fetchCategoriesForAwait, fetchUsersForAwait, getCategories, getProductDetails, getProducts } from './services'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const fetchProducts: LoaderFunction = async () => {
  return { products: await getProducts() }
}

export const productsLoader: LoaderFunction = async () => {
  return { products: await getProducts() }
  
  // const response = await fetch('http://example.com/api/products')
  // if (!response.ok) throw new Error('Failed to fetch products')
  // const products: IProduct[] = await response.json()
  // return { products }
}


export const fetchProductById: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const id = params.productId
  return { product: await getProductDetails(id as string) }
}

export const fetchCategories: LoaderFunction = () => {
  return { categories: getCategories() }
}

export async function userLoader() {
  const userPromise = new Promise((resolve) => {
    setTimeout(() => resolve({ name: 'John Doe' }), 1000)
  })
  
  return { userPromise }  
}


export async function userListLoader() {
  const usersPromise = fetchUsersForAwait()
  return { usersPromise }
}


export async function categoriesLoader() {
  await sleep(1000)
  const categoriesPromise = fetchCategoriesForAwait()  
  return { categoriesPromise }  
}


//c-gpt
// export const categoriesLoader: LoaderFunction = async () => {
//   try {
//     const response = await fetch('/api/categories', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })

//     if (!response.ok) {
//       console.log('!response.ok.....!!!')
//       throw new Error(`Error fetching categories: ${response.statusText}`)
//     }

//     const categories: ICategory[] = await response.json()
//     return { categories: Promise.resolve(categories) }
//   } 
//   catch (error) {
//     console.error(error)
//     return { categories: Promise.reject(error) }
//   }
// }


//c-gpt
// export async function categoriesLoader(): Promise<{ categories: Promise<ICategory[]> }> {
//   return {
//     categories: Promise.resolve([{ id: 1, name: 'Category 1' }, { id: 2, name: 'Category 2' }]),
//   }
// }
