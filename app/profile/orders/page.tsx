import { getSession } from '@/lib/getSession'
import { getUserOrders } from '@/lib/queries'
import OrdersComponent from './components/Orders'
import { Order } from '@/types'

const Orders = async () => {
  const session = await getSession()
  const orders = await getUserOrders(session?.user.id || '')

  return (
    <div>
      <OrdersComponent orders={orders.filter((order: Order) => order.status !== 'received')} />
    </div>
  )
}

export default Orders
