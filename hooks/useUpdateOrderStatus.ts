import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_URL

const useUpdateOrderStatus = async (id: string) => {
  try {
    const response = await axios.patch(`${URL}/orders/updatestatus/${id}`)
    return response.data
  } catch (error) {
    return error
  }
}

export default useUpdateOrderStatus
