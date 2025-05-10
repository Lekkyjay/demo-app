const API_URL = import.meta.env.VITE_API_URL

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
