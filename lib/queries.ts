import axios from 'axios'

const URL = process.env.BACK_URL || process.env.NEXT_PUBLIC_URL

export const getRestaurants = () => {
  return fetch(`${URL}/companies`, { cache: 'no-cache' }).then((data) => data.json())
}

export const getCategories = () => {
  return fetch(`${URL}/categories`, { cache: 'no-cache' }).then((data) => data.json())
}

export const getRestaurantById = async (id: string) => {
  const response = await fetch(`${URL}/companies/${id}`, { cache: 'no-cache' })
  return await response.json()
}

export const getRestaurantInfo = async (id: string) => {
  const response = await fetch(`${URL}/companies/info/${id}`)
  return await response.json()
}

export const getAllFoods = async () => {
  const response = await fetch(`${URL}/foods/all`, { cache: 'no-cache' })
  return await response.json()
}

export const getFoodsByCategory = async (category: string) => {
  const response = await fetch(`${URL}/foods/category/${category}`, { cache: 'no-cache' })
  return await response.json()
}

export const getOfferFoodsByCompany = async (id: string) => {
  const response = await fetch(`${URL}/foods/offerCompany/${id}`)
  return await response.json()
}

export const getFoodsByCompany = async (id: string, name: string) => {
  const response = await fetch(`${URL}/foods/company/${id}?name=${name}`)
  return await response.json()
}

export const getCompanyOutstandings = async (id: string) => {
  const response = await fetch(`${URL}/companies/outstandings/${id}`)
  return await response.json()
}

export const getCompanyCategories = async (id: string) => {
  const response = await fetch(`${URL}/companies/categories/${id}`)
  return await response.json()
}

export const getSearchFoods = async (name: string) => {
  const response = await axios.get(`${URL}/foods/search/${name}`)
  return response.data
}

export const getUserByEmail = async (email: string) => {
  const response = await axios.get(`${URL}/users/userInfo/${email}`)
  return response.data
}

export const getCompanyOrders = async (companyId: string) => {
  return fetch(`${URL}/orders/company/${companyId}`, { cache: 'no-cache' }).then((data) => data.json())
}

export const getUserOrders = async (userId: string) => {
  return fetch(`${URL}/orders/user/${userId}`, { cache: 'no-cache' }).then((data) => data.json())
}

export const verifyUser = async (email: string) => {
  return fetch(`${URL}/auth/verify/${email}`, { cache: 'force-cache' }).then((data) => data.json())
}
