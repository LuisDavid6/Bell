import axios from 'axios'

interface Restaurant {
  name: string
  email: string
  password: string
  address: string
  tel: string
  horary: string
  shipping: number
}

const URL = process.env.NEXT_PUBLIC_URL

const useRestaurantRegister = async (restaurant: Restaurant) => {
  try {
    const response = await axios.post(`${URL}/companies`, restaurant)
    return response.data
  } catch (error) {
    return error
  }
}

export default useRestaurantRegister
