import { getSession } from '@/lib/getSession'
import { getUserOrders } from '@/lib/queries'

import OrdersHistory from './components/OrdersHistory'

const History = async () => {
  const session = await getSession()
  const orders = await getUserOrders(session?.user.id || '')

  return <OrdersHistory orders={orders} />
}

export default History
