import type { User } from "./types"

const API_URL = import.meta.env.VITE_API_URL || '/api'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function getProducts() {  
  await sleep(1000)
  const res = await fetch(API_URL + '/products')
  if (!res.ok) {
    throw {
      message: 'Failed to fetch products', 
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data
}

// export async function fetchProducts() {  
//   await sleep(1000)
//   const res = await fetch(API_URL + '/products')
//   if (!res.ok) throw new Error('Failed to fetch products')
//   const data = await res.json()
//   return data
// }

export async function getProductDetails(id: string) {
  const res = await fetch(API_URL + '/products/' + id)
  if (!res.ok) {  
    throw {
      message: 'Failed to fetch product details', 
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data
}

export async function getCategories() {  
  await sleep(1000)
  const res = await fetch(API_URL + '/categories')
  if (!res.ok) {
    throw {
      message: 'Failed to fetch categories', 
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data
}

export async function fetchCategoriesForAwait() {    
  try {
    const res = await fetch(API_URL + '/categories')
    if (!res.ok) {
      return { __error: new Error(`Failed to fetch categories: ${res.status}`) };
    }
    const data = await res.json()
    return data
  } 
  catch (err) {
    return { __error: err instanceof Error ? err : new Error('Unknown error') };
  }
}


export async function fetchUsersForAwait(): Promise<User[] | { __error: Error }> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      return { __error: new Error(`Failed with status ${response.status}`) };
    }
    return await response.json();
  } 
  catch (err) {
    return { __error: err instanceof Error ? err : new Error('Unknown error') };
  }
}


export async function fetchUserForAwait(): Promise<{ name: string } | { __error: Error }> {
  try {
    const res = await fetch('/api/user');

    if (!res.ok) {
      return { __error: new Error(`Failed to fetch: ${res.status}`) };
    }

    const data = await res.json();
    return data;
  } catch (err) {
    return { __error: err instanceof Error ? err : new Error('Unknown error') };
  }
}
