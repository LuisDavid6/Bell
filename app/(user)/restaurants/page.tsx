import RestaurantsComponent from '@/components/Restaurants'
import { getRestaurants } from '@/lib/queries'

const Restaurants = async () => {
  const restaurants = await getRestaurants()

  return (
    <div className='py-5'>
      <h3 className='text-title font-bold text-2xl sm:text-3xl italic mt-2 mb-10 w-full text-center'>Restaurantes</h3>
      <RestaurantsComponent restaurants={restaurants} />
    </div>
  )
}

export default Restaurants
