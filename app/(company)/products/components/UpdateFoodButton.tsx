'use client'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import UpdateInfoModal from './UpdateFoodModal'
import { Food } from '@/types'

const UpdateFoodButton = ({ food }: { food: Food }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && <UpdateInfoModal closeModal={closeModal} food={food} />}
      <PencilSquareIcon className='w-5 cursor-pointer' onClick={() => openModal()} />
    </>
  )
}

export default UpdateFoodButton
