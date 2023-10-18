'use client'

import { useState } from 'react'
import useStore from '@/lib/store'
import { errorAlert, successAlert } from '@/lib/alerts'
import { getUserByEmail } from '@/lib/queries'
import useAddToCart from '@/hooks/useAddToCart'
import { loginAlert } from '@/components/LoginAlert'
import { getSession } from 'next-auth/react'
import { FaCartPlus } from 'react-icons/fa'

interface Product {
  id: string
  cant: number
}

interface Props {
  product: Product
  closeModal: () => void
}

const AddToCartButton: React.FC<Props> = ({ product: { id, cant }, closeModal }) => {
  const [loading, setLoading] = useState(false)

  const { user } = useStore()
  const { setUser } = useStore()

  const add = async () => {
    setLoading(true)
    const session = await getSession()

    if (!session?.user) return loginAlert()

    const response = await useAddToCart({
      userId: user?.id ?? '',
      foodId: id,
      cant,
    })

    closeModal()

    setLoading(false)

    const userData = await getUserByEmail(user?.email || '')

    if (userData) setUser(userData)

    if (response === 'success') successAlert('Producto agregado al carrito')
    else errorAlert('un error ha ocurrido')
  }

  return (
    <button
      className='flex p-2 items-center gap-2 bg-btn hover:bg-btn2 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed'
      disabled={loading}
      onClick={add}
    >
      <FaCartPlus />
      Agregar
    </button>
  )
}

export default AddToCartButton
