import React from 'react'
import Restaurants from '@/components/Restaurants'
import Link from 'next/link'

const URL = process.env.BACK_URL

const getData = () => {
  return fetch(`${URL}/companies`, { cache: 'no-store' }).then((data) => data.json())
}

const Home = async () => {
  const data = await getData()

  return (
    <div className='flex flex-col'>
      <div className='mx-1 mb-4'>
        <h3 className='text-title font-bold text-2xl'>Restaurantes</h3>
      </div>
      <Restaurants restaurants={data.slice(0, 6)} />
      <div className='w-full mt-3'>
        <Link href='restaurants'>
          <h5 className='text-title text-center font-bold text-lg underline cursor-pointer'>
            Ver más ...
          </h5>
        </Link>
      </div>
    </div>
  )
}

export default Home
