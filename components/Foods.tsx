import { Food } from '@/types'
import Image from 'next/image'
import AddToCart from '@/components/AddToCart'
import { convertPrice } from '@/pipes/convertPrice.pipe'

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
            className='flex gap-3 w-full rounded-2xl shadow-lg mt-6 transition duration-500 ease-in-out hover:scale-105 cursor-pointer bg-bg'
          >
            <div className='relative flex items-center'>
              <Image
                className='rounded-lg object-cover'
                src={food.img}
                alt={food.name}
                width={200}
                height={200}
                style={{ objectFit: 'cover', width: '200px', height: '200px' }}
              />
            </div>
            <div className='grid gap-2 justify-center items-center w-4/6'>
              <h1 className='text-lg text-center font-semibold italic'> {food.name} </h1>
              <p> {food.description} </p>
              <h2> {convertPrice(food.price)} </h2>
              <AddToCart product={{ id: food.id, company: food.company }} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Foods
