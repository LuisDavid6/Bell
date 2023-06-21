import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_URL

const useNewOrder = async (userId: string) => {
  try {
    const response = await axios.post(`${URL}/orders`, { userId })
    return response.data
  } catch (error) {
    return error
  }
}

export default useNewOrder
