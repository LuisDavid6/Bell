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
  return (
    <button className='flex p-2 items-center gap-2 bg-btn hover:bg-btn2 text-white rounded'>
      <FaCartPlus />
      Agregar
    </button>
  )
}

export default AddToCart
