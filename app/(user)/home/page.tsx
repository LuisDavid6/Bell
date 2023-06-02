import React from 'react'
import Restaurants from '@/components/Restaurants'
import Categories from '@/components/Categories'
import Link from 'next/link'
import { getRestaurants, getCategories, getAllFoods } from '@/lib/queries'
import Foods from '@/components/Foods'

const Home = async () => {
  const restaurants = await getRestaurants()
  const categories = await getCategories()
  const foods = await getAllFoods()

  return (
    <div className='flex flex-col mb-5'>
      <Categories categories={categories} />
      <div className='mx-1 mb-4'>
        <h3 className='text-title font-bold text-2xl md:ml-3'>Restaurantes</h3>
      </div>
      <Restaurants restaurants={restaurants.slice(0, 6)} />
      <div className='w-full mt-3'>
        <Link href='restaurants'>
          <h5 className='text-title text-center font-bold text-lg underline cursor-pointer'>
            Ver más ...
          </h5>
        </Link>
      </div>
      <div className='mx-1 mt-4'>
        <h3 className='text-title font-bold text-2xl md:ml-3'>Comidas</h3>
      </div>
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-2 gap-3 max-md:grid-cols-1 mx-3 w-5/6'>
          <Foods foods={foods} />
        </div>
      </div>
      <div className='w-full mt-3'>
        <Link href=''>
          <h5 className='text-title text-center font-bold text-lg underline cursor-pointer'>
            Ver más ...
          </h5>
        </Link>
      </div>
    </div>
  )
}

export default Home
