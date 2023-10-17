'use client'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import { Order, FoodCart } from '@/types'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'

const Orders = ({ orders }: { orders: Order[] }) => {
  const [orderInfo, setOrderInfo] = useState<Order>(orders[0])

  const translateStatus = {
    pending: 'pendiente',
    inProccess: 'en preparación',
    shipping: 'en camino',
    received: 'recibido',
  }

  return (
    <div className='ml-5 justify-center gap-10 flex max-md:flex-col'>
      <div className='flex flex-col items-center'>
        <h2 className='mb-5'>{orders.length > 0 ? 'Pedidos en proceso' : 'No hay pedidos en proceso'}</h2>
        {orders.length > 1 &&
          orders.map((order) => {
            return (
              <div
                key={order.id}
                className={`${orderInfo.ticket === order.ticket && 'border-b-title'} border-b-2 flex md:gap-3 w-fit pt-2 m-2 cursor-pointer`}
                onClick={() => setOrderInfo(order)}
              >
                <BookmarkIcon className={`${orderInfo.ticket === order.ticket && 'text-title fill-current'} w-6`} />
                <div className='flex gap-10 w-fit p-2 items-center'>
                  <h3>#{order.ticket}</h3>
                  <h2
                    className={`my-2 sm:text-sm text-sm rounded-lg p-1 font-bold text-center ${
                      order.status === 'received'
                        ? 'bg-green-400 text-green-700'
                        : order.status === 'shipping'
                        ? 'bg-blue-400 text-blue-700'
                        : order.status === 'inProccess'
                        ? 'bg-amber-400 text-amber-700'
                        : 'bg-orange-400 text-orange-700'
                    }`}
                  >
                    {translateStatus[order.status]}
                  </h2>
                </div>
              </div>
            )
          })}
      </div>
      <hr />
      {orderInfo && (
        <div className='mt-10 w-full flex flex-col lg:flex-row lg:gap-10'>
          <div>
            <section>
              <h2 className='text-gray-600 dark:text-gray-400'>Estado:</h2>
              <h2 className='font-bold ml-5'>{translateStatus[orderInfo.status]}</h2>
            </section>
            <section>
              <h2 className='text-gray-600 dark:text-gray-400'>Restaurante:</h2>
              <h2 className='font-bold ml-5'>{orderInfo.company.name}</h2>
            </section>
            <section>
              <h2 className='text-gray-600 dark:text-gray-400'>ticket:</h2>
              <h2 className='font-bold ml-5'>{orderInfo.ticket}</h2>
            </section>
            <section>
              <h2 className='text-gray-600 dark:text-gray-400'>costo de envio:</h2>
              <h2 className='font-bold ml-5'>{convertPrice(orderInfo.company.shipping)}</h2>
            </section>
            <section>
              <h2 className='text-gray-600 dark:text-gray-400'>Total a pagar:</h2>
              <h2 className='font-bold ml-5'>{convertPrice(orderInfo.total)}</h2>
            </section>
          </div>
          <div>
            <section className='mt-5'>
              <h2 className='text-gray-600 mb-4'>Comidas:</h2>
              {orderInfo.foods.map(({ food, cant, total }: FoodCart) => {
                return (
                  <div key={food.name} className='border-b-2 pb-2 mb-5 max-w-sm ml-5'>
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
                )
              })}
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default Orders
