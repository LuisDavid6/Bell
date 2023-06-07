import axios from 'axios'

interface Product {
  userId: string
  foodId: string
  isNewCompany: boolean
}

const URL = process.env.NEXT_PUBLIC_URL

const useAddToCart = async (product: Product) => {
  const response = await axios.post(`${URL}/cart`, product)

  return response.data
}

export default useAddToCart
