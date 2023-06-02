import Image from 'next/image'
import React from 'react'
import Foods from '@/components/Foods'

interface Params {
  id: string
}

interface Props {
  params: Params
}

const URL = process.env.BACK_URL

const getData = async (id: string) => {
  const response = await fetch(`${URL}/companies/${id}`)
  return await response.json()
}

const Restaurant = async ({ params: { id } }: Props) => {
  const restaurant = await getData(id)

  return (
    <div className='flex flex-col'>
      <div className='relative h-52 overflow-hidden'>
        <Image
          src='https://www.pequerecetas.com/wp-content/uploads/2013/07/hamburguesas-caseras-receta.jpg'
          alt='restaurant image'
          fill
          className='object-cover opacity-80'
        />
        <h4 className='absolute left-0 bottom-0 bg-btn text-white md:text-2xl px-3'>
          {restaurant.name}
        </h4>
      </div>

      <div className='flex flex-wrap bg-bg gap-x-10'>
        <h6> Dirección: {restaurant.address} </h6>
        <h6> Teléfono: {restaurant.tel} </h6>
        <h6> Horarios: {restaurant.horary} </h6>
        <h6> Precio de envío: {restaurant.shipping} </h6>
      </div>
      <div className='flex gap-6 max-sm:flex-col'>
        <div className='border-2 rounded-r-lg px-5 mt-4'>
          <ul className='max-sm:flex max-sm:gap-6 overflow-x-auto'>
            <li>Todos</li>
            <li>Hamburguesas</li>
            <li>Perros</li>
            <li>Arepas rellenas</li>
            <li>Ensaladas</li>
            <li>Postres</li>
            <li>Bebidas</li>
          </ul>
        </div>
        <div className='grid grid-cols-2 w-full gap-3 max-md:grid-cols-1'>
          <Foods foods={restaurant.foods} />
        </div>
      </div>
    </div>
  )
}

export default Restaurant
