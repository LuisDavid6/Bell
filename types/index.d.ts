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
  foods: Food[]
}

interface CompanyCart {
  id: string
  name: string
}
