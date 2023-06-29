'use client'
import useAddToCart from '@/hooks/useAddToCart'
import useGetCart from '@/hooks/useGetCart'
import useNewOrder from '@/hooks/useNewOrder'
import { errorAlert, successAlert } from '@/lib/alerts'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import { FoodCart } from '@/types'
import { MinusSmallIcon, PlusSmallIcon, TrashIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Props {
  isOpen: boolean
  closeModal: () => void
  email: string
}

const CartModal: React.FC<Props> = ({ isOpen, closeModal, email }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!isOpen)
  const { data: cart, mutate } = useGetCart(email)

  useEffect(() => {
    setIsVisible(!!isOpen)
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      closeModal()
    }, 300)
  }

  const handleCant = async (cant: number, foodId: string) => {
    await useAddToCart({
      foodId,
      cant,
      userId: cart.user,
    })
    mutate()
  }

  const confirmOrder = async () => {
    try {
      const response = await useNewOrder(cart.user)
      mutate()

      if (response === 'success') successAlert('pedido realizado')
      else errorAlert('un error ha ocurrido')
    } catch (error) {
      errorAlert('un error ha ocurrido')
    }
  }

  if (!isOpen) return null

  return (
    <div className='z-50 transision duration-300 bg-black bg-opacity-60 overflow-x-hidden overflow-y-auto fixed inset-0 flex justify-end'>
      <div className='w-full' onClick={handleClose}></div>
      <div
        className={`${
          isVisible ? '' : 'translate-x-full'
        } max-w-md min-w-[280px] md:min-w-[350px] min-h-screen h-fit bg-white transform duration-300 drop-shadow-md`}
      >
        {cart?.company ? (
          <div className='flex flex-col mx-2 mt-1 pb-4 gap-4 items-center'>
            <h2 className='text-title italic font-bold'>{cart.company.name}</h2>
            {cart.foods.map(({ id, food, cant }: FoodCart) => {
              return (
                <div key={id} className=' flex w-full gap-5 border rounded-lg p-2'>
                  <div className='grid gap-3 w-3/6'>
                    <h5 className='text-left'>{food.name}</h5>
                    <h5 className='text-left'>{convertPrice(food.price)}</h5>
                    <div className='border-2 p-1 flex place-self-center gap-5 w-fit'>
                      {cant > 1 ? (
                        <MinusSmallIcon
                          className='w-6 cursor-pointer'
                          onClick={() => handleCant(-1, food.id)}
                        />
                      ) : (
                        <TrashIcon
                          className='w-5 cursor-pointer'
                          onClick={() => handleCant(-1, food.id)}
                        />
                      )}
                      <h1 className='font-extrabold'>{cant}</h1>
                      <PlusSmallIcon
                        className='w-5 cursor-pointer'
                        onClick={() => handleCant(1, food.id)}
                      />
                    </div>
                  </div>
                  <Image src={food.img} alt={food.name} width={130} height={100} />
                </div>
              )
            })}
            <h3 className='font-semibold mt-4 text-left w-full'>
              Domicilio {convertPrice(cart.company.shipping)}
            </h3>
            <h2 className='mt-4 font-bold'>Total a pagar</h2>
            <h1 className='font-bold text-title text-xl mb-5'>
              {convertPrice(cart.total + cart.company.shipping)}
            </h1>
            <button
              onClick={confirmOrder}
              className='bg-btn py-2 px-4 text-white rounded-full transition duration-500
                ease-in-out hover:scale-110 hover:bg-btn2'
            >
              Realizar pedido
            </button>
          </div>
        ) : (
          <div className='mt-6'>
            <h3 className='text-center mb-10'>Tu carrito está vacío</h3>
            <h3 className='text-center text-title italic mx-3'>
              Los productos que agregues aparecerán aquí
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartModal
