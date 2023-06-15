'use client'
import { PlusSmallIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import AddProductModal from './AddProductModal'

const AddProductButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && <AddProductModal isOpen={isOpen} closeModal={closeModal} />}
      <button
        onClick={() => openModal()}
        className='bg-btn py-1 pl-2 pr-4 text-white rounded transition duration-500
      ease-in-out hover:scale-110 hover:bg-btn2 flex items-center'
      >
        <PlusSmallIcon className='w-6' />
        Nuevo producto
      </button>
    </>
  )
}

export default AddProductButton
