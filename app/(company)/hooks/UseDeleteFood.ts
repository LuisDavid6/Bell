import axios from 'axios'
import { getSession } from 'next-auth/react'

const UseDeleteFood = async (id: string) => {
  try {
    const URL = process.env.NEXT_PUBLIC_URL
    const session = await getSession()

    const response = await axios.delete(`${URL}/foods/${id}`, {
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

export default UseDeleteFood
