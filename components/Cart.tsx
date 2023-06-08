'use client'
import React, { useEffect, useState } from 'react'
import CartModal from '@/components/CartModal'
import useCurrentUser from '@/hooks/useCurrentUser'
import useStore from '@/lib/store'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

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
      <ShoppingCartIcon
        onClick={openModal}
        className='w-6 transition duration-500 ease-in-out hover:scale-110 cursor-pointer hover:text-title'
      />
    </>
  )
}

export default Cart
