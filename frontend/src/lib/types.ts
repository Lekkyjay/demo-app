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

export type User = {
  id: number
  name: string
  email: string
}

export interface IProduct {
  name: string;
}
