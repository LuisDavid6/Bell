'use client'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'
import AddProductForm from './AddProductForm'

interface Props {
  isOpen: boolean
  closeModal: () => void
}

const AddProductModal: FC<Props> = ({ isOpen, closeModal }) => {
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-60 z-50 transition duration-300 flex justify-center items-center
        overflow-x-hidden overflow-y-auto'
    >
      <div className='bg-white relative drop-shadow-md rounded-lg p-10'>
        <div
          onClick={() => closeModal()}
          className='absolute top-2 right-2 rounded-full p-2 bg-slate-100 cursor-pointer'
        >
          <XMarkIcon className='text-black w-6' />
        </div>
        <AddProductForm />
      </div>
    </div>
  )
}

export default AddProductModal
