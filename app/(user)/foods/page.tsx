import FoodsComponent from '@/components/Foods'
import { getAllFoods } from '@/lib/queries'

const Foods = async () => {
  const foods = await getAllFoods()

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h3 className='text-title font-bold text-2xl sm:text-3xl italic my-5'>Comidas</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mx-3 w-5/6 mb-5'>
        <FoodsComponent foods={foods} />h
      </div>
    </div>
  )
}

export default Foods
