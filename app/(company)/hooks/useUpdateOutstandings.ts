import axios from 'axios'
import { getSession } from 'next-auth/react'

const useUpdateOutstandings = async (foodsId: string[]) => {
  try {
    const URL = process.env.NEXT_PUBLIC_URL
    const session = await getSession()

    const response = await axios.patch(
      `${URL}/companies/outstandings`,
      { foodsId },
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${session?.user.token}`,
        },
      }
    )

    return response.data
  } catch (error) {
    return error
  }
}

export default useUpdateOutstandings
