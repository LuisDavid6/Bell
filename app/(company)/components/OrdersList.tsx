'use client'
import { Order as OrderType } from '@/types'
import { FC } from 'react'
import Order from './Order'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface Props {
  orders: OrderType[]
}

const OrdersList: FC<Props> = ({ orders }) => {
  const params = useSearchParams()

  const isActive = (status: string) => params.get('status') === status

  return (
    <div>
      <div className='rounded-lg bg-bg2 p-3'>
        <div className='md:flex md:gap-8'>
          <h2 className='text-xl font-extrabold max-md:mb-5'>Pedidos día</h2>
          <section className='flex items-center gap-3 sm:gap-7 md:mt-8 max-sm:text-sm'>
            <Link href='orders?status=pending'>
              <h5
                className={`${
                  isActive('pending') && 'border-b-4 border-title text-title font-bold'
                } font-semibold`}
              >
                Pendientes
              </h5>
            </Link>
            <Link href='orders?status=inProccess'>
              <h5
                className={`${
                  isActive('inProccess') && 'border-b-4 border-title text-title font-bold'
                } font-semibold`}
              >
                En preparación
              </h5>
            </Link>
            <Link href='orders?status=shipping'>
              <h5
                className={`${
                  isActive('shipping') && 'border-b-4 border-title text-title font-bold'
                } font-semibold`}
              >
                Enviados
              </h5>
            </Link>
            <Link href='orders?status=received'>
              <h5
                className={`${
                  isActive('received') && 'border-b-4 border-title text-title font-bold'
                } font-semibold`}
              >
                Entregados
              </h5>
            </Link>
          </section>
        </div>
        <hr />
        {orders
          .filter((e) => e.status === params.get('status'))
          .map((order) => (
            <Order order={order} key={order.id} />
          ))}
      </div>
      <div className='rounded-lg bg-bg2 p-3 mt-20'>
        <h2 className='text-xl font-extrabold max-md:mb-5'>Historial Pedidos</h2>
        <hr />
        {orders.map((order) => (
          <Order order={order} key={order.id} history={true} />
        ))}
      </div>
    </div>
  )
}

export default OrdersList
