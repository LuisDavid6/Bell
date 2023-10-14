import Image from 'next/image'
import React from 'react'
import Foods from '@/components/Foods'
import { getRestaurantById } from '@/lib/queries'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import RestaurantInfo from './components/Restaurant'

interface Params {
  id: string
}

interface Props {
  params: Params
}

const Restaurant = async ({ params: { id } }: Props) => {
  const restaurant = await getRestaurantById(id)

  return <RestaurantInfo restaurant={restaurant} />
}

export default Restaurant
