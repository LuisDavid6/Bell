import axios from 'axios'

interface User {
  username: string
  email: string
  password: string
  address: string
  tel: string
}

const URL = process.env.NEXT_PUBLIC_URL

const useUserRegister = async (user: User) => {
  try {
    const response = await axios.post(`${URL}/users`, user)
    return response.data
  } catch (error) {
    return error
  }
}

export default useUserRegister
