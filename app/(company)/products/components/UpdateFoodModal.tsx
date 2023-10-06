'use client'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import UpdateFoodForm from './UpdateFoodForm'
import { Food } from '@/types'

interface Props {
  closeModal: () => void
  food: Food
}

const UpdateFoodModal: FC<Props> = ({ closeModal, food }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 z-50 transition duration-300 flex justify-center items-start overflow-x-hidden overflow-y-auto'>
      <div className='bg-white dark:bg-bgDark relative drop-shadow-md rounded-lg p-10 w-10/12 max-w-3xl my-5'>
        <div onClick={() => closeModal()} className='absolute top-2 right-2 rounded-full p-2 bg-slate-100 dark:bg-gray-400 cursor-pointer'>
          <XMarkIcon className='text-black w-6' />
        </div>
        <UpdateFoodForm food={food} />
      </div>
    </div>
  )
}

export default UpdateFoodModal
