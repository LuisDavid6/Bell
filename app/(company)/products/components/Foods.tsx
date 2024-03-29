import { convertPrice } from '@/pipes/convertPrice.pipe'
import { Food } from '@/types'
import Image from 'next/image'
import { FC } from 'react'
import UpdateFoodButton from './UpdateFoodButton'
import DeleteProductButton from './DeleteProductButton'

interface Props {
  foods: Food[]
}

const Foods: FC<Props> = ({ foods }) => {
  return (
    <div className='mt-10 flex justify-center'>
      {foods.length > 0 ? (
        <table className=''>
          <thead>
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => {
              return (
                <tr className=''>
                  <td className='border-b-2 border-gray-300'>
                    <Image src={food.img} alt={food.name} width={50} height={50} />
                  </td>
                  <td className='p-3 border-b-2 border-gray-300 pr-10'>{food.name}</td>
                  <td className='p-3 border-b-2 border-gray-300'>{convertPrice(food.price)}</td>
                  <td className='p-3 pl-8 sm:pl-16 border-b-2 border-gray-300'>
                    <UpdateFoodButton food={food} />
                  </td>
                  <td className='p-3 border-b-2 border-gray-300'>
                    <DeleteProductButton id={food.id} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <h4>No hay productos</h4>
      )}
    </div>
  )
}

export default Foods
