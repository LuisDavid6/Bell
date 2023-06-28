import { Order } from '@/types'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { FC } from 'react'

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
      <div className='bg-white relative drop-shadow-md rounded-lg p-10'>
        <div
          onClick={() => closeModal()}
          className='absolute top-2 right-2 rounded-full p-2 bg-slate-100 cursor-pointer'
        >
          <XMarkIcon className='text-black w-6' />
        </div>
        <div className='mt-5'>
          <section className='flex justify-between gap-10'>
            <div className='flex flex-col items-center gap-y-2'>
              <h3 className='text-gray-600 '>Fecha</h3>
              <h3>{order.date}</h3>
            </div>
            <div className='flex flex-col items-center gap-y-2'>
              <h3 className='text-gray-600 '>#Ticket</h3>
              <h3>{order.ticket}</h3>
            </div>
          </section>
          <section className='mt-10'>
            {order.foods.map(({ id, cant, total, food }) => (
              <div key={id} className='border-b-2'>
                <Image src={food.img} alt={food.name} width={130} height={100} />
                <h4>{food.name}</h4>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

export default OrderModal
