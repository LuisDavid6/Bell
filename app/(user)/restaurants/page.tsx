import RestaurantsComponent from '@/components/Restaurants'
import { getRestaurants } from '@/lib/queries'

const Restaurants = async () => {
  const restaurants = await getRestaurants()

  return (
    <div className='py-5'>
      <RestaurantsComponent restaurants={restaurants} />
    </div>
  )
}

export default Restaurants
