import { getSession } from '@/lib/getSession'
import { getRestaurantById } from '@/lib/queries'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import Outstandings from './components/Outstandings'
import OrdersHome from './components/OrdersHome'
import Comments from './components/Comments'
import UpdateInfoButton from './components/UpdateInfoButton'

const Dashboard = async () => {
  const session = await getSession()
  const company = await getRestaurantById(session?.user.id || '')

  return (
    <div className='w-full flex flex-col justify-center lg:flex-row gap-4 max-[500px]:-ml-10 pb-3'>
      <div>
        <div className='border-2 border-title rounded-xl mt-10 py-4 pl-5 pr-8 relative'>
          <h3 className='text-lg font-bold mb-2'>Datos</h3>
          <hr />
          <div className='grid md:grid-cols-2 gap-3 py-3'>
            <section className='text-lg font-bold'>
              <h6>email:</h6>
              <h5 className='text-md font-medium ml-5 text-gray-600 dark:text-gray-400'>{company.email}</h5>
            </section>
            <section className='text-lg font-bold'>
              <h6>teléfono:</h6>
              <h5 className='text-md font-medium ml-5 text-gray-600 dark:text-gray-400'>{company.tel}</h5>
            </section>
            <section className='text-lg font-bold'>
              <h6>dirección:</h6>
              <h5 className='text-md font-medium ml-5 text-gray-600 dark:text-gray-400'>{company.address}</h5>
            </section>
            <section className='text-lg font-bold'>
              <h6>envio:</h6>
              <h5 className='text-md font-medium ml-5 text-gray-600 dark:text-gray-400'>{convertPrice(company.shipping)}</h5>
            </section>
            <section className='text-lg font-bold'>
              <h6>horarios:</h6>
              <h5 className='text-md font-medium ml-5 text-gray-600 dark:text-gray-400'>{company.horary}</h5>
            </section>
            <section className='absolute right-0 top-0'>
              <UpdateInfoButton companyInfo={company} />
            </section>
          </div>
        </div>
        <div className='mt-10'>
          <Outstandings company={company} />
        </div>
        <div className='mt-10 border-2 border-title rounded-xl p-4'>
          <OrdersHome />
        </div>
      </div>
      <div className='border-2 border-title rounded-xl mt-10 py-4 pl-5 pr-8'>
        <Comments />
      </div>
    </div>
  )
}

export default Dashboard
