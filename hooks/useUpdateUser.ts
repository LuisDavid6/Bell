import axios from 'axios'
import { getSession } from 'next-auth/react'

interface UserData {
  username?: string
  tel?: string
  address?: string
  avatar?: string
}

const URL = process.env.NEXT_PUBLIC_URL

const useUpdateUser = async (userId: string, data: UserData) => {
  try {
    const session = await getSession()

    const response = await axios.patch(`${URL}/users/${userId}`, data, {
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

export default useUpdateUser
