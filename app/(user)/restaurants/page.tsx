import React from 'react'
import { getSession } from '@/lib/getSession'
import { redirect } from 'next/navigation'
import RestaurantsComponent from '@/components/Restaurants'
import { getRestaurants } from '@/lib/queries'

const Restaurants = async () => {
  const session = await getSession()
  const restaurants = await getRestaurants()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className=''>
      <h3>Restaurants</h3>
      <RestaurantsComponent restaurants={restaurants} />
    </div>
  )
}

export default Restaurants
