import Image from 'next/image'
import React from 'react'
import Foods from '@/components/Foods'
import { getRestaurantById } from '@/lib/queries'
import { convertPrice } from '@/pipes/convertPrice.pipe'

interface Params {
  id: string
}

interface Props {
  params: Params
}

const Restaurant = async ({ params: { id } }: Props) => {
  const restaurant = await getRestaurantById(id)

  return (
    <div className='flex flex-col'>
      <div className='relative h-52 overflow-hidden'>
        <Image
          src={
            restaurant.image ||
            'https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg'
          }
          alt='restaurant image'
          fill
          className='object-cover opacity-80'
        />
        <h4 className='absolute left-0 bottom-0 bg-btn opacity-90 w-full text-white font-bold md:text-2xl px-3 py-2'>
          {restaurant.name?.toUpperCase()}
        </h4>
      </div>

      <div className='flex flex-wrap bg-bg gap-x-10 py-5'>
        <h6> Dirección: {restaurant.address} </h6>
        <h6> Teléfono: {restaurant.tel} </h6>
        <h6> Horarios: {restaurant.horary} </h6>
        <h6> Precio de envío: {convertPrice(restaurant.shipping)} </h6>
      </div>
      <div className='flex gap-6 max-sm:flex-col'>
        <div className='border-2 rounded-r-lg px-5 mt-4'>
          <ul className='max-sm:flex max-sm:gap-6 overflow-x-auto'>
            {restaurant.categories.map((category: string) => (
              <li className='whitespace-nowrap my-5 cursor-pointer'>{category}</li>
            ))}
          </ul>
        </div>
        <div className='grid grid-cols-2 gap-3 max-md:grid-cols-1 h-fit mx-2 mb-4'>
          <Foods foods={restaurant.foods} />
        </div>
      </div>
    </div>
  )
}

export default Restaurant
