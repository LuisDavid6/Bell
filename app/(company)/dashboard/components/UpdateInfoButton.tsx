'use client'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import UpdateInfoModal from './UpdateInfoModal'
import { Company } from '@/types'

const UpdateInfoButton = ({ companyInfo }: { companyInfo: Company }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && <UpdateInfoModal closeModal={closeModal} company={companyInfo} />}
      <PencilSquareIcon className='w-7 mr-3 mt-4 cursor-pointer' onClick={() => openModal()} />
    </>
  )
}

export default UpdateInfoButton
