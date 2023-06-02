import React from 'react'
import Restaurants from '@/components/Restaurants'
import Categories from '@/components/Categories'
import Link from 'next/link'
import { getRestaurants, getCategories } from '@/lib/queries'

const Home = async () => {
  const restaurants = await getRestaurants()
  const categories = await getCategories()

  return (
    <div className='flex flex-col'>
      <Categories categories={categories} />
      <div className='mx-1 mb-4'>
        <h3 className='text-title font-bold text-2xl'>Restaurantes</h3>
      </div>
      <Restaurants restaurants={restaurants.slice(0, 6)} />
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
