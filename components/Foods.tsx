import { Food } from '@/types'
import Image from 'next/image'
import AddToCart from '@/components/AddToCart'

interface Props {
  foods: Food[]
}

const Foods: React.FC<Props> = ({ foods }) => {
  return (
    <>
      {foods.map((food: Food) => {
        return (
          <div
            key={food.id}
            className='flex justify-center gap-3 w-full rounded-2xl shadow-lg mt-6 transition duration-500 ease-in-out hover:scale-105 cursor-pointer bg-bg'
          >
            <div className='relative flex items-center w-full'>
              <Image className='rounded-lg object-cover' src={food.img} alt={food.name} fill />
            </div>
            <div className='grid gap-2 justify-center items-center'>
              <h1 className='text-lg text-center font-semibold italic'> {food.name} </h1>
              <p> {food.description} </p>
              <h2> ${food.price} </h2>
              <AddToCart product={{ id: food.id, company: food.company }} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Foods
