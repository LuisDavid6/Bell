'use client'

import { useState } from 'react'
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'
import ChangeOutstandingsModal from './ChangeOutstandingsModal'
import { Company } from '@/types'

const ChangeOutstandingsButton = ({ company }: { company: Company }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && <ChangeOutstandingsModal closeModal={closeModal} company={company} />}

      <ArrowsRightLeftIcon className='w-7 absolute right-0 top-0 mr-2 mt-2 cursor-pointer' onClick={() => openModal()} />
    </>
  )
}

export default ChangeOutstandingsButton
