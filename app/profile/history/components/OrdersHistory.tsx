'use client'

import { useState } from 'react'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import OrderDetailsModal from './OrderDetailsModal'
import { Order } from '@/types'

const OrdersHistory = ({ orders }: { orders: Order[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(orders[0])

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && <OrderDetailsModal closeModal={closeModal} order={selectedOrder} />}

      <div className='flex justify-center flex-wrap mx-1 gap-5 pb-5'>
        {orders.map((order) => (
          <section
            className='border-2 border-title p-3 w-[250px] rounded-se-2xl rounded-es-2xl cursor-pointer'
            onClick={() => {
              setSelectedOrder(order)
              openModal()
            }}
          >
            <h4 className='text-right'>{order.date}</h4>
            <h6 className='mt-3'>
              <span className='text-gray-400'>Orden</span> #{order.ticket}
            </h6>
            <h6 className='mt-2'>
              <span className='text-gray-400'>Total</span> {convertPrice(order.total)}
            </h6>
            <h6 className='mt-2 text-title italic'>{order.company.name}</h6>
          </section>
        ))}
      </div>
    </>
  )
}

export default OrdersHistory
