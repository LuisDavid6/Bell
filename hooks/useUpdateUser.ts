import axios from 'axios'

interface UserData {
  username?: string
  email?: string
  tel?: string
  address?: string
  avatar?: string
}

const URL = process.env.NEXT_PUBLIC_URL

const useUpdateUser = async (userId: string, data: UserData) => {
  try {
    const response = await axios.patch(`${URL}/users/${userId}`, data)
    return response.data
  } catch (error) {
    return error
  }
}

export default useUpdateUser
