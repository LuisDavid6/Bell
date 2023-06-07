'use client'
import { FaCartPlus } from 'react-icons/fa'
import useStore from '@/lib/store'
import useAddToCart from '@/hooks/useAddToCart'

interface Product {
  id: string
  company: string
}

interface Props {
  product: Product
}

const AddToCart: React.FC<Props> = ({ product: { id, company } }) => {
  const { user } = useStore()

  const add = async () => {
    const response = await useAddToCart({
      userId: user?.id ?? '',
      foodId: id,
      isNewCompany: (user?.cart.company || '') === company,
    })
    console.log(response)
  }

  return (
    <button
      className='flex p-2 items-center gap-2 bg-btn hover:bg-btn2 text-white rounded'
      onClick={add}
    >
      <FaCartPlus />
      Agregar
    </button>
  )
}

export default AddToCart
