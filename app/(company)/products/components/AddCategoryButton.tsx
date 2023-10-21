'use client'

import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import AddCategoryModal from './AddCategoryModal'

const AddCategoryButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && <AddCategoryModal closeModal={closeModal} />}

      <PlusIcon
        onClick={() => openModal()}
        className='w-9 text-white bg-btn p-2 rounded-full cursor-pointer transition duration-500 ease-in-out hover:scale-110 hover:bg-btn2'
      />
    </>
  )
}

export default AddCategoryButton
