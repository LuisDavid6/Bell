import React from 'react'
import { Restaurant } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { RiEBike2Fill } from 'react-icons/ri'
import { convertPrice } from '@/pipes/convertPrice.pipe'

interface Props {
  restaurants: Restaurant[]
}

const Restaurants: React.FC<Props> = ({ restaurants }) => {
  return (
    <div className='flex justify-center flex-wrap mx-1 gap-5'>
      {restaurants.map((restaurant: Restaurant) => {
        return (
          <Link href={`restaurant/${restaurant.id}`} key={restaurant.name}>
            <div
              className='block max-w-xs rounded-lg bg-bg dark:bg-bgDark shadow-lg transition duration-500
               ease-in-out hover:scale-110 cursor-pointer relative'
            >
              <Image
                className='rounded-t-lg'
                src={restaurant.image || 'https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg'}
                alt={restaurant.name}
                width={320}
                height={200}
                style={{ objectFit: 'cover', width: '320px', height: '200px' }}
              />
              <h1 className='mb-2 text-lg text-center font-semibold italic'>{restaurant.name} </h1>
              <div className='text-sm flex justify-between px-3'>
                <span className=''> {restaurant.horary} </span>
                <div className='flex items-center gap-2'>
                  <RiEBike2Fill />
                  <span className=''>{convertPrice(restaurant.shipping)}</span>
                </div>
              </div>
              <div className='absolute right-0 top-0 flex items-center gap-2 bg-title rounded-md px-2 py-1 opacity-80'>
                <RiEBike2Fill />
                <span className='pr-1 font-bold'>{convertPrice(restaurant.shipping)}</span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Restaurants
