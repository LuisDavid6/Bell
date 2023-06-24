import { getSession } from '@/lib/getSession'
import { getCompanyOrders } from '@/lib/queries'
import React from 'react'
import OrdersList from '../components/OrdersList'

const Orders = async () => {
  const session = await getSession()
  const orders = await getCompanyOrders(session?.user.id || '')

  return (
    <div className='mt-10 md:pl-10 max-[500px]:-ml-10'>
      <OrdersList orders={orders} />
    </div>
  )
}

export default Orders
