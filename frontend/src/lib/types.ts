export interface IProduct {
  id: number
  name: string
  price: number
  category: string
}

export interface ICategory {
  id: number
  name: string
}

export interface IError {
  message: string
  status: string
  statusText: string
}