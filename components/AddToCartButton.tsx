'use client'

import { useState } from 'react'
import { errorAlert, successAlert } from '@/lib/alerts'
import { getUserByEmail } from '@/lib/queries'
import useAddToCart from '@/hooks/useAddToCart'
import { loginAlert } from '@/components/LoginAlert'
import { getSession } from 'next-auth/react'
import { FaCartPlus } from 'react-icons/fa'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Product {
  id: string
  cant: number
  companyId: string
}

interface Props {
  product: Product
  closeModal: () => void
}

const AddToCartButton: React.FC<Props> = ({ product: { id, cant, companyId }, closeModal }) => {
  const [loading, setLoading] = useState(false)

  const Content = ({ userId }: { userId: string }) => {
    return (
      <div className='flex flex-col justify-center items-center gap-4'>
        <h4 className='font-bold'>Ya tienes productos de otra tienda en tu carrito ¿Deseas limpiarlo y agregar este producto?</h4>
        <button onClick={() => AddToCart(userId)} className='bg-btn py-2 px-4 text-white text-sm rounded-lg hover:bg-btn2'>
          Agregar
        </button>
      </div>
    )
  }

  const alert = (userId: string) => {
    toast.warning(<Content userId={userId} />, {
      position: 'top-center',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: localStorage.getItem('theme') === 'light' ? 'light' : 'dark',
      style: { backgroundColor: localStorage.getItem('theme') === 'light' ? '#fff2e5' : '#4C4A4A' },
    })
  }

  const AddToCart = async (userId: string) => {
    const response = await useAddToCart({
      userId,
      foodId: id,
      cant,
    })

    closeModal()

    if (response === 'success') successAlert('Producto agregado al carrito')
    else errorAlert('un error ha ocurrido')
  }

  const add = async () => {
    setLoading(true)

    const session = await getSession()

    const currentUser = await getUserByEmail(session?.user.email || '')

    if (!session?.user) return loginAlert()

    if (currentUser.cart.foods.length > 0 && currentUser.cart.company.id !== companyId) alert(session?.user.id)
    else AddToCart(session?.user.id)

    setLoading(false)
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
