import axios from 'axios'
import { getSession } from 'next-auth/react'

interface CompanyData {
  name: string
  price: number
  description: string
  category?: string[]
  offer?: boolean
  offerPrice?: number
  img: string
}

const useUpdateFood = async (id: string, data: CompanyData) => {
  try {
    const URL = process.env.NEXT_PUBLIC_URL
    const session = await getSession()

    const response = await axios.patch(`${URL}/foods/${id}`, data, {
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

export default useUpdateFood
