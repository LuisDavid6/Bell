'use client'

import { useState } from 'react'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import { Company } from '@/types'
import Image from 'next/image'
import Foods from '@/components/Foods'

const Restaurant = ({ restaurant }: { restaurant: Company }) => {
  const [foods, setFoods] = useState(restaurant.foods)
  const [categoryFilter, setCategoryFilter] = useState('All')

  const filterByCategory = (category: string) => {
    setFoods(restaurant.foods.filter((food) => food.category.includes(category)))
  }

  return (
    <div className='flex flex-col'>
      <div className='relative h-52 overflow-hidden sm:h-80 lg:h-96'>
        <section className='dark:opacity-60'>
          <Image src={restaurant.image} alt='restaurant image' fill className='object-cover opacity-80' />
        </section>
        <h4 className='absolute left-0 bottom-0 bg-title dark:bg-black text-white dark:text-title dark:brightness-150 opacity-80 dark:bg-opacity-90 w-full drop-shadow-2xl shadow-white font-bold md:text-2xl px-3 py-2'>
          {restaurant.name?.toUpperCase()}
        </h4>
      </div>

      <div className='flex flex-wrap bg-bg dark:bg-bgDark gap-x-10 py-5 w-full justify-center gap-y-5'>
        <h6> Dirección: {restaurant.address} </h6>
        <h6> Teléfono: {restaurant.tel} </h6>
        <h6> Horarios: {restaurant.horary} </h6>
        <h6> Precio de envío: {restaurant.shipping <= 0 ? 'Gratis' : convertPrice(restaurant.shipping)} </h6>
      </div>
      <div className='flex gap-6 max-sm:flex-col'>
        <div className='px-5 mt-4 h-fit'>
          <h5 className='w-full text-center text-title font-bold text-lg sm:text-xl italic my-4'>Categorias</h5>
          <ul className='max-sm:flex max-sm:gap-6 overflow-x-auto '>
            <li
              key={'All'}
              className={`${
                categoryFilter === 'All' && 'bg-title text-white rounded-md'
              } p-2 whitespace-nowrap my-5 cursor-pointer underline-offset-1 font-extrabold`}
              onClick={() => {
                setCategoryFilter('All')
                setFoods(restaurant.foods)
              }}
            >
              Todos
            </li>
            {restaurant.categories.map((category: string) => (
              <li
                key={category}
                className={`${
                  categoryFilter === category && 'bg-title text-white rounded-md'
                } p-2 whitespace-nowrap my-5 cursor-pointer underline-offset-1`}
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
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 h-fit mx-2 mb-4'>
          <Foods foods={foods} />
        </div>
      </div>
    </div>
  )
}

export default Restaurant
