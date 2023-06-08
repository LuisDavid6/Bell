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
  closeModal: () => void
}

const AddToCart: React.FC<Props> = ({ product: { id, company }, closeModal }) => {
  const { user } = useStore()

  const add = async () => {
    const response = await useAddToCart({
      userId: user?.id ?? '',
      foodId: id,
      isNewCompany: user?.cart.company.id !== company,
    })

    closeModal()

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
