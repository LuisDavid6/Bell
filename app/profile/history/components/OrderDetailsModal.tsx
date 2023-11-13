import { convertPrice } from '@/pipes/convertPrice.pipe'
import { FoodCart, Order } from '@/types'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const OrderDetailsModal = ({ closeModal, order }: { closeModal: () => void; order: Order }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 z-50 transition duration-300 flex justify-center items-start overflow-x-hidden overflow-y-auto'>
      <div className='bg-white dark:bg-bgDark relative drop-shadow-md rounded-lg p-10 my-1.5'>
        <div onClick={() => closeModal()} className='absolute top-2 right-2 rounded-full p-2 bg-slate-100 dark:bg-gray-400 cursor-pointer'>
          <XMarkIcon className='text-black w-6' />
        </div>
        <section className='mt-5'>
          <h2 className='font-bold text-right mb-5'>{order.date}</h2>

          <h2 className='text-gray-600 dark:text-gray-400'>Restaurante:</h2>
          <h2 className='font-bold ml-5'>{order.company.name}</h2>

          <h2 className='text-gray-600 dark:text-gray-400'>Orden:</h2>
          <h2 className='font-bold ml-5'>#{order.ticket}</h2>

          <h2 className='text-gray-600 dark:text-gray-400'>costo de envio:</h2>
          <h2 className='font-bold ml-5'>{convertPrice(order.company.shipping)}</h2>

          <h2 className='text-gray-600 mb-4 dark:text-gray-400 mt-5'>Comidas:</h2>
          {order.foods.map(({ food, cant, total }: FoodCart) => {
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
          <h2 className='font-bold text-center text-xl'>Total {convertPrice(order.total)}</h2>
        </section>
      </div>
    </div>
  )
}

export default OrderDetailsModal
