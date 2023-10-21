import axios from 'axios'
import { getSession } from 'next-auth/react'

const useDeleteCategory = async (name: string) => {
  try {
    const URL = process.env.NEXT_PUBLIC_URL
    const session = await getSession()

    const response = await axios.delete(`${URL}/companies/category`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${session?.user.token}`,
      },
      data: { name: name },
    })

    return response.data
  } catch (error) {
    return error
  }
}

export default useDeleteCategory
