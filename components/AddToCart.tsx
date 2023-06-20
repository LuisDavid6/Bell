'use client'
import { FaCartPlus } from 'react-icons/fa'
import useStore from '@/lib/store'
import useAddToCart from '@/hooks/useAddToCart'
import { getUserByEmail } from '@/lib/queries'
import { errorAlert, successAlert } from '@/lib/alerts'

interface Product {
  id: string
  cant: number
}

interface Props {
  product: Product
  closeModal: () => void
}

const AddToCart: React.FC<Props> = ({ product: { id, cant }, closeModal }) => {
  const { user } = useStore()
  const { setUser } = useStore()

  const add = async () => {
    const response = await useAddToCart({
      userId: user?.id ?? '',
      foodId: id,
      cant,
    })

    closeModal()

    const userData = await getUserByEmail(user?.email || '')

    if (userData) setUser(userData)

    if (response === 'success') successAlert('Producto agregado al carrito')
    else errorAlert('un error ha ocurrido')
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
