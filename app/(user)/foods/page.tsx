import FoodsComponent from '@/components/Foods'
import { getAllFoods } from '@/lib/queries'

const Foods = async () => {
  const foods = await getAllFoods()

  return (
    <div className='w-full flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3  mx-3 w-5/6'>
        <FoodsComponent foods={foods} />
      </div>
    </div>
  )
}

export default Foods
