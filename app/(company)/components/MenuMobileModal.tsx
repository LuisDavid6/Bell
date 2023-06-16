import React from 'react'
import Menu from './Menu'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
  closeModal: () => void
}
const MenuMobileModal: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className='z-50 transision duration-300 bg-black bg-opacity-60 overflow-x-hidden overflow-y-auto fixed inset-0 flex justify-start'>
      <Menu />
      <div
        onClick={() => closeModal()}
        className='absolute top-3 left-40 rounded-full p-2 bg-white cursor-pointer'
      >
        <XMarkIcon className='text-black w-6' />
      </div>
      <div className='w-full' onClick={closeModal}></div>
    </div>
  )
}

export default MenuMobileModal
