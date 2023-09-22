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
      {/* <img src='https://images.rappi.com.ec/restaurants_background/eccarlsjrpaseo-1674049497257.jpg' /> */}
      <img src='https://res.cloudinary.com/dnc21abpp/image/upload/v1695318361/Bell/promoNew_c4mlcx.png' />

      <div className='mx-1 mb-4'>
        <h3 className='text-title font-bold text-2xl md:ml-3'>Restaurantes</h3>
      </div>
      <Restaurants restaurants={restaurants.slice(0, 6)} />
      <div className='w-full mt-3'>
        <Link href='restaurants'>
          <h5 className='text-title text-center font-bold text-lg underline cursor-pointer'>Ver más ...</h5>
        </Link>
      </div>

      {/* <div className='relative w-full h-52 overflow-hidden sm:h-80 lg:h-96 bg-[url("https://res.cloudinary.com/dnc21abpp/image/upload/v1695263284/Bell/promo_2_d3mxiw.png")] bg-cover'> */}
      <div className='w-full flex gap-3 overflow-hidden'>
        {/* <img src='https://res.cloudinary.com/dnc21abpp/image/upload/v1695315103/Bell/promo_at5f3r.png' />
        <img src='https://res.cloudinary.com/dnc21abpp/image/upload/v1695315102/Bell/promo3_stdtoh.png' /> */}

        <Image
          src={'https://res.cloudinary.com/dnc21abpp/image/upload/v1695318361/Bell/promoNew_c4mlcx.png'}
          alt=' image'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto'

          // style={{ objectFit: 'none' }}
        />
        {/*
        <Image
          src={'https://res.cloudinary.com/dnc21abpp/image/upload/v1695315102/Bell/promo3_stdtoh.png'}
          alt=' image'
          fill
          className='object-cover'
        />
        <Image
          src={'https://res.cloudinary.com/dnc21abpp/image/upload/v1695315102/Bell/promo2_ullllc.png'}
          alt=' image'
          width={500}
          height={100}
          className='object-cover'

        />
        <Image
          src={'https://res.cloudinary.com/dnc21abpp/image/upload/v1695315103/Bell/promo4_cci4hm.png'}
          alt=' image'
          width={500}
          height={100}
          className='object-cover'
        /> */}
      </div>

      {/* <img src='https://res.cloudinary.com/dnc21abpp/image/upload/v1695262173/Bell/promo_hsckwp.png' width='100%' height='10%' /> */}

      <div className='mx-1 mt-4'>
        <h3 className='text-title font-bold text-2xl md:ml-3'>Comidas</h3>
      </div>
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-2 gap-3 max-md:grid-cols-1 mx-3 w-5/6'>
          <Foods foods={foods.slice(0, 6)} />
        </div>
      </div>
      <div className='w-full mt-3'>
        <Link href=''>
          <h5 className='text-title text-center font-bold text-lg underline cursor-pointer'>Ver más ...</h5>
        </Link>
      </div>
    </div>
  )
}

export default Home
