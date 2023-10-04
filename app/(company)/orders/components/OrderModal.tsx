'use client'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import { Order } from '@/types'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { FC } from 'react'
import OrderStatusButton from './OrderStatusButton'

interface Props {
  closeModal: () => void
  order: Order
}

const OrderModal: FC<Props> = ({ closeModal, order }) => {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-60 z-50 transition duration-300 flex justify-center items-center
        overflow-x-hidden overflow-y-auto'
    >
      <div className='bg-white dark:bg-bgDark relative drop-shadow-md rounded-lg p-10 md:w-3/6 max-w-3xl'>
        <div onClick={() => closeModal()} className='absolute top-2 right-2 rounded-full p-2 bg-slate-100 cursor-pointer'>
          <XMarkIcon className='text-black w-6' />
        </div>
        <div className='mt-5'>
          <section className='flex justify-between gap-10 md:justify-evenly'>
            <div className='flex flex-col items-center gap-y-2'>
              <h3 className='text-gray-600 dark:text-gray-400 '>Fecha</h3>
              <h3>{order.date}</h3>
            </div>
            <div className='flex flex-col items-center gap-y-2'>
              <h3 className='text-gray-600 dark:text-gray-400 '>#Ticket</h3>
              <h3>{order.ticket}</h3>
            </div>
          </section>
          <section className='mt-10'>
            {order.foods.map(({ cant, total, food }) => (
              <div key={food.name} className='border-b-2 pb-2 mb-5'>
                <section className='flex items-center gap-5'>
                  <Image src={food.img} alt={food.name} width={130} height={100} className='rounded' />
                  <h4>{food.name}</h4>
                </section>
                <section className='flex justify-between items-center mt-2'>
                  <h4>
                    Cantidad: <span className='font-bold'>{cant}</span>
                  </h4>
                  <h4>
                    Valor: <span className='font-bold'>{convertPrice(total)}</span>
                  </h4>
                </section>
              </div>
            ))}
          </section>
          <section className='w-full flex justify-center'>
            <h2 className='font-bold'>Total {convertPrice(order.total)}</h2>
          </section>
          <section className='w-full flex justify-center mt-10'>
            <OrderStatusButton status={order.status} id={order.id} closeModal={closeModal} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default OrderModal
