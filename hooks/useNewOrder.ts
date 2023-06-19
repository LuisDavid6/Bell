import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_URL

const useNewOrder = async (userId: string) => {
  const response = await axios.post(`${URL}/orders`, { userId })

  return response.data
}

export default useNewOrder
