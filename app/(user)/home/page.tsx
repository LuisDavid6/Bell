import React from 'react'
import Restaurants from '@/components/Restaurants'
import Categories from '@/components/Categories'
import Link from 'next/link'
import { getRestaurants, getCategories, getAllFoods } from '@/lib/queries'
import Foods from '@/components/Foods'
import Image from 'next/image'

const Home = async () => {
  const restaurants = await getRestaurants()
  const categories = await getCategories()
  const foods = await getAllFoods()

  return (
    <div className='flex flex-col pb-5 '>
      <Categories categories={categories} />
      <Image
        src={'https://res.cloudinary.com/dnc21abpp/image/upload/v1695440001/Bell/banner_promo_2_uh7h9g.png'}
        alt=' image'
        width='0'
        height='0'
        sizes='100vw'
        className='w-full h-auto'
      />

      <div className='mx-1 mb-4 py-5'>
        <h3 className='text-title font-bold text-2xl sm:text-3xl ml-3 italic'>Mejores Restaurantes</h3>
      </div>
      <Restaurants restaurants={restaurants.slice(0, 6)} />
      <div className='w-full mt-3 py-5'>
        <Link href='restaurants'>
          <h5 className='text-title text-center font-bold text-lg underline cursor-pointer'>Ver más ...</h5>
        </Link>
      </div>

      <Image
        src={'https://res.cloudinary.com/dnc21abpp/image/upload/v1695485381/Bell/banner_promo_u8dqkx.png'}
        alt=' image'
        width='0'
        height='0'
        sizes='100vw'
        className='w-full h-auto'
      />

      <div className='mx-1 mt-4'>
        <h3 className='text-title font-bold text-2xl sm:text-3xl ml-3 italic'>Lo más pedido</h3>
      </div>
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-2 gap-3 max-md:grid-cols-1 mx-3 w-5/6'>
          <Foods foods={foods.reverse().slice(0, 6)} />
        </div>
      </div>
      <div className='w-full mt-3 py-5'>
        <Link href='foods'>
          <h5 className='text-title text-center font-bold text-lg underline cursor-pointer'>Ver más ...</h5>
        </Link>
      </div>
    </div>
  )
}

export default Home
