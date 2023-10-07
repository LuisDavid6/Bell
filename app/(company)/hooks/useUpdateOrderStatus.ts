import axios from 'axios'
import { getSession } from 'next-auth/react'

const URL = process.env.NEXT_PUBLIC_URL

const useUpdateOrderStatus = async (id: string) => {
  try {
    const session = await getSession()

    const response = await axios.patch(
      `${URL}/orders/updatestatus/${id}`,
      {},
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

export default useUpdateOrderStatus
