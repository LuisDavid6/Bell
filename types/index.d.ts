export interface Restaurant {
  name: string
  email: string
  image?: string
  address: string
  tel: string[]
  horary: string
  shipping: number
  active: boolean
  rate: number
  role: string
  date: string
  foods: []
  id: string
}

export interface Food {
  id: string
  name: string
  description: string
  price: number
  offer: boolean
  img: string
  available: boolean
  category: string[]
  company: string
}

export interface Category {
  id: string
  name: string
  image: string
}

export interface Cart {
  id: string
  user: string
  total: number
  company: CompanyCart
  foods: FoodCart[]
}

export interface FoodCart {
  id: string
  cart: string
  food: Food
  cant: number
  total: number
}

interface CompanyCart {
  id: string
  name: string
}

export interface User {
  id: string
  username: string
  email: string
  role: string
  address: string[]
  tel: string
  cart: Cart
  orders: any
}

export interface Order {
  id: string
  ticket: string
  date: string
  total: number
  status: OrderStatus
  foods: FoodCart[]
  company: Restaurant
  user: string
}

export enum OrderStatus {
  Pending = 'pending',
  InProccess = 'inProccess',
  Shipping = 'shipping',
  Received = 'received',
}
