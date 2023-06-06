'use client'
import React, { useState } from 'react'
import CartModal from '@/components/CartModal'
import { Cart } from '@/types'

interface Props {
  userCart: Cart
}

const Cart: React.FC<Props> = ({ userCart }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && <CartModal isOpen={isOpen} closeModal={closeModal} cart={userCart} />}
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
