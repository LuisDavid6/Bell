import axios from 'axios'
import { getSession } from 'next-auth/react'

interface FoodData {
  name: string
  description: string
  price: number
  offer?: boolean
  offerPrice?: number
  img: string
  category: string[]
}

const useAddFood = async (data: FoodData) => {
  try {
    const URL = process.env.NEXT_PUBLIC_URL
    const session = await getSession()

    const response = await axios.post(`${URL}/foods`, data, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${session?.user.token}`,
      },
    })

    return response.data
  } catch (error) {
    return error
  }
}

export default useAddFood
