'use client'
import React, { useEffect, useState } from 'react'
import CartModal from '@/components/CartModal'
import useCurrentUser from '@/hooks/useCurrentUser'
import useStore from '@/lib/store'

interface Props {
  email: string
}

const Cart: React.FC<Props> = ({ email }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { setUser } = useStore()

  const { data } = useCurrentUser(email)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    if (data) {
      setUser(data)
    }
  }, [data])

  return (
    <>
      {isOpen && <CartModal isOpen={isOpen} closeModal={closeModal} email={email} />}
      <button
        onClick={openModal}
        className='bg-btn py-2 px-4 text-white rounded-full transition duration-500 
        ease-in-out hover:scale-110 hover:bg-btn2'
      >
        Carrito
      </button>
    </>
  )
}

export default Cart
