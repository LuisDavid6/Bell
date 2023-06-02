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
              className='block max-w-xs rounded-lg bg-slate-50 shadow-lg text-black transition duration-500
               ease-in-out hover:scale-110 cursor-pointer'
            >
              <Image
                className='rounded-t-lg'
                src='https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg'
                alt={restaurant.name}
                width={320}
                height={250}
              />
              <h1 className='mb-2 text-lg text-center font-semibold italic'>{restaurant.name} </h1>
              <div className='text-sm flex justify-between px-3'>
                <span className=''> {restaurant.horary} </span>
                <div className='flex items-center gap-2'>
                  <RiEBike2Fill />
                  <span className=''>{convertPrice(restaurant.shipping)}</span>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Restaurants
