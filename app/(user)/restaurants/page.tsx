import React from 'react'
import { getSession } from '@/lib/getSession'
import { redirect } from 'next/navigation'
import RestaurantsComponent from '@/components/Restaurants'

const URL = process.env.BACK_URL

const getData = () => {
  return fetch(`${URL}/companies`, { cache: 'no-store' }).then((data) => data.json())
}

const Restaurants = async () => {
  const session = await getSession()
  const restaurants = await getData()

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
