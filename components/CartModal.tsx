'use client'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import { Cart } from '@/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Props {
  isOpen: boolean
  closeModal: () => void
  cart: Cart
}

const CartModal: React.FC<Props> = ({ isOpen, closeModal, cart }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!isOpen)

  useEffect(() => {
    setIsVisible(!!isOpen)
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      closeModal()
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div className='z-50 transision duration-300 bg-black bg-opacity-5 overflow-x-hidden overflow-y-auto fixed inset-0 flex justify-end'>
      <div className='w-full' onClick={handleClose}></div>
      <div
        className={`${
          isVisible ? '' : 'translate-x-full'
        } max-w-md min-w-[280px] md:min-w-[350px] bg-white transform duration-300 drop-shadow-md`}
      >
        <div className='flex flex-col mx-2 mt-1 gap-4 items-center'>
          <h2 className='text-title italic font-bold'>{cart.company.name}</h2>
          {cart.foods.map((food) => {
            return (
              <div key={food.id} className='border rounded-lg p-2 flex w-full gap-5'>
                <div className='grid gap-3 w-3/6'>
                  <h5>{food.name}</h5>
                  <h5>{convertPrice(food.price)}</h5>
                </div>
                <Image src={food.img} alt={food.name} width={100} height={100} />
              </div>
            )
          })}
          <h2 className='mt-4 font-bold'>Total a pagar</h2>
          <h1 className='font-bold text-title text-xl mb-5'>{convertPrice(cart.total)}</h1>
          <button
            className='bg-btn py-2 px-4 text-white rounded-full transition duration-500
                ease-in-out hover:scale-110 hover:bg-btn2'
          >
            Realizar pedido
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartModal
