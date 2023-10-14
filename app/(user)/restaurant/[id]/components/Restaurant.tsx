'use client'

import { useState } from 'react'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import { Company } from '@/types'
import Image from 'next/image'
import Foods from '@/components/Foods'

const Restaurant = ({ restaurant }: { restaurant: Company }) => {
  const [foods, setFoods] = useState(restaurant.foods)
  const [categoryFilter, setCategoryFilter] = useState('')

  const filterByCategory = (category: string) => {
    setFoods(restaurant.foods.filter((food) => food.category.includes(category)))
  }

  return (
    <div className='flex flex-col'>
      <div className='relative h-52 overflow-hidden sm:h-80 lg:h-96'>
        <section className='dark:opacity-60'>
          <Image
            src={restaurant.image || 'https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg'}
            alt='restaurant image'
            fill
            className='object-cover opacity-80'
          />
        </section>
        <h4 className='absolute left-0 bottom-0 bg-title dark:bg-black text-white dark:text-title dark:brightness-150 opacity-80 dark:bg-opacity-90 w-full drop-shadow-2xl shadow-white font-bold md:text-2xl px-3 py-2'>
          {restaurant.name?.toUpperCase()}
        </h4>
      </div>

      <div className='flex flex-wrap bg-bg dark:bg-bgDark gap-x-10 py-5'>
        <h6> Dirección: {restaurant.address} </h6>
        <h6> Teléfono: {restaurant.tel} </h6>
        <h6> Horarios: {restaurant.horary} </h6>
        <h6> Precio de envío: {convertPrice(restaurant.shipping)} </h6>
      </div>
      <div className='flex gap-6 max-sm:flex-col'>
        <div className='px-5 mt-4 h-fit'>
          <ul className='max-sm:flex max-sm:gap-6 overflow-x-auto '>
            {restaurant.categories.map((category: string) => (
              <li
                className={`${categoryFilter === category && 'bg-title p-2 rounded-md'} whitespace-nowrap my-5 cursor-pointer underline-offset-1`}
                onClick={() => {
                  filterByCategory(category)
                  setCategoryFilter(category)
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className='grid grid-cols-2 gap-3 max-md:grid-cols-1 h-fit mx-2 mb-4'>
          <Foods foods={foods} />
        </div>
      </div>
    </div>
  )
}

export default Restaurant
