'use client'
import { FC, useState } from 'react'
import { Order } from '@/types'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import OrderModal from './OrderModal'

interface Props {
  order: Order
  history?: boolean
}

const Order: FC<Props> = ({ order, history }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  const translateStatus = (status: string) => {
    return status === 'received' ? 'Entregado' : status === 'shipping' ? 'Enviado' : status === 'inProccess' ? 'Preparación' : 'Pendiente'
  }

  return (
    <>
      {isOpen && <OrderModal closeModal={closeModal} order={order} />}
      <div className='flex justify-around mt-5 hover:bg-white dark:hover:bg-black cursor-pointer max-sm:text-sm' onClick={openModal}>
        <h3 className='my-2'>{history ? order.date : order.date.substring(11)}</h3>
        <h3 className='my-2'>#{order.ticket}</h3>
        <h3 className={`${history && 'max-md:hidden'} my-2 `}>{convertPrice(order.total)}</h3>
        {history && (
          <h4
            className={`my-2 sm:text-sm text-xs rounded-lg p-1 font-bold sm:w-1/6 w-3/12 text-center ${
              order.status === 'received'
                ? 'bg-green-400 text-green-700'
                : order.status === 'shipping'
                ? 'bg-blue-400 text-blue-700'
                : order.status === 'inProccess'
                ? 'bg-amber-400 text-amber-700'
                : 'bg-orange-400 text-orange-700'
            }`}
          >
            {translateStatus(order.status)}
          </h4>
        )}
      </div>
    </>
  )
}

export default Order
