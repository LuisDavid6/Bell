import { getSession } from '@/lib/getSession'
import { getCompanyOrders } from '@/lib/queries'
import React from 'react'
import OrdersList from './components/OrdersList'

const Orders = async () => {
  const session = await getSession()
  const orders = await getCompanyOrders(session?.user.id || '')

  return (
    <div className='mt-10 container justify-center w-full max-w-7xl max-md:-ml-5'>
      <OrdersList orders={orders} />
    </div>
  )
}

export default Orders
