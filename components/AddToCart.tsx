'use client'
import { FaCartPlus } from 'react-icons/fa'
// import { useUser } from '@/context/userContext'

interface Product {
  id: string
  company: string
}

interface Props {
  product: Product
}

const AddToCart: React.FC<Props> = ({ product: { id, company } }) => {
  // const { addToCart } = useUser()
  // return <FaCartPlus onClick={() => addToCart(id, company)} />
  return <FaCartPlus />
}

export default AddToCart
