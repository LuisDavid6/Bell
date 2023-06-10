import axios from 'axios'

interface Restaurant {
  name: string
  email: string
  password: string
  address: string
  tel: string[]
}

const URL = process.env.NEXT_PUBLIC_URL

const useRestaurantRegister = async (restaurant: Restaurant) => {
  const response = await axios.post(`${URL}/companies`, restaurant)

  return response.data
}

export default useRestaurantRegister
