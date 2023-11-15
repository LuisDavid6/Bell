'use client'

import { Food } from '@/types'
import Image from 'next/image'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import { useState } from 'react'
import FoodModal from './FoodModal'

interface Props {
  foods: Food[]
}

const Foods: React.FC<Props> = ({ foods }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [foodData, setFoodData] = useState<Food>(foods[0])

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && <FoodModal isOpen={isOpen} closeModal={closeModal} data={foodData} />}
      {foods.map((food: Food) => {
        return (
          <div
            key={food.id}
            onClick={() => {
              setFoodData(food)
              openModal()
            }}
            className='flex gap-3 w-full rounded-2xl shadow-lg mt-6 transition duration-500 ease-in-out hover:scale-105 cursor-pointer bg-bg dark:bg-bgDark'
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
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Foods
