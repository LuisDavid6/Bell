'use client'
import { Bars3Icon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import MenuMobileModal from './MenuMobileModal'

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className='pl-1'>
      {isOpen ? <MenuMobileModal closeModal={closeModal} /> : <Bars3Icon className='w-8 cursor-pointer mt-4' onClick={openModal} />}
    </div>
  )
}

export default MenuMobile
