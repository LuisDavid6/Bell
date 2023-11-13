export interface Company {
  id: string
  name: string
  email: string
  image: string
  address: string
  tel: string
  horary: string
  shipping: number
  rate: number
  role: string
  categories: string[]
  outstandings: Food[]
  foods: Food[]
  orders?: Order[]
  promoCodes?: PromoCode[]
}

export interface Food {
  id: string
  name: string
  description: string
  price: number
  offer: boolean
  offerPrice: number
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

export interface Company {
  id: string
  name: string
  email: string
  image: string
  address: string
  tel: string
  horary: string
  shipping: number
  rate: number
  role: string
  categories?: string[]
  outstandings?: string[]
  foods?: Food[]
  orders?: Order[]
  promoCodes?: PromoCode[]
}

export interface PromoCode {
  id: string
  code: string
  discount: number
  company?: Company
  createAt: string
  startDate: string
  expireDate: string
}
