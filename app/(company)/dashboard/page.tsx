import { getSession } from '@/lib/getSession'
import { getRestaurantInfo, getOfferFoodsByCompany } from '@/lib/queries'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import React from 'react'
import OfferFoods from '../components/OfferFoods'
import Orders from '../components/Orders'
import Comments from '../components/Comments'

const Dashboard = async () => {
  const session = await getSession()
  const company = await getRestaurantInfo(session?.user.sub || '')
  const offerFoods = await getOfferFoodsByCompany(session?.user.sub || '')

  return (
    <div className='mt-4'>
      <div className='text-2xl font-bold mb-4'>{company.name.toUpperCase()}</div>
      <hr />
      <div className='flex gap-4'>
        <div>
          <div className='border-2 border-title rounded-xl mt-10 py-4 pl-5 pr-8 relative'>
            <h3 className='text-lg font-bold mb-2'>Datos</h3>
            <hr />
            <div className='grid md:grid-cols-2 gap-3 py-3'>
              <section className='text-lg font-bold'>
                <h6>email:</h6>
                <h5 className='text-md font-medium ml-5 text-gray-600'>{company.email}</h5>
              </section>
              <section className='text-lg font-bold'>
                <h6>teléfono:</h6>
                <h5 className='text-md font-medium ml-5 text-gray-600'>{company.tel}</h5>
              </section>
              <section className='text-lg font-bold'>
                <h6>dirección:</h6>
                <h5 className='text-md font-medium ml-5 text-gray-600'>{company.address}</h5>
              </section>
              <section className='text-lg font-bold'>
                <h6>horarios:</h6>
                <h5 className='text-md font-medium ml-5 text-gray-600'>{company.horary}</h5>
              </section>
              <section className='text-lg font-bold'>
                <h6>envio:</h6>
                <h5 className='text-md font-medium ml-5 text-gray-600'>
                  {convertPrice(company.shipping)}
                </h5>
              </section>
              <PencilSquareIcon className='w-7 absolute right-0 top-0 mr-2 mt-2 cursor-pointer' />
            </div>
          </div>
          <div className='mt-10'>
            <OfferFoods foods={offerFoods.slice(0, 3)} />
          </div>
          <div className='mt-10 border-2 border-title rounded-xl p-4'>
            <Orders />
          </div>
        </div>
        <div className='border-2 border-title rounded-xl mt-10 py-4 pl-5 pr-8'>
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
