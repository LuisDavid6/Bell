import axios from 'axios'

interface User {
  username: string
  email: string
  password: string
  address: string[]
  tel: string
}

const URL = process.env.NEXT_PUBLIC_URL

const useUserRegister = async (user: User) => {
  const response = await axios.post(`${URL}/users`, user)

  return response.data
}

export default useUserRegister
