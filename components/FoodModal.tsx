'use client'
import React, { useEffect, useState } from 'react'
import { XMarkIcon, PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/outline'
import { Food } from '@/types'
import Image from 'next/image'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import AddToCartButton from '@/components/AddToCartButton'
import Link from 'next/link'

interface Props {
  isOpen: boolean
  closeModal: () => void
  data: Food
}

const FoodModal: React.FC<Props> = ({ isOpen, closeModal, data: food }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!isOpen)
  const [cant, setCant] = useState(1)
  const [total, setTotal] = useState(food?.price)

  useEffect(() => {
    setIsVisible(!!isOpen)
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      closeModal()
    }, 300)
  }

  const handleCant = (value: number) => {
    setCant(cant + value)
    setTotal(food?.price * (cant + value))
  }

  if (!isOpen) return null

  return (
    <div
      className='z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center
    overflow-x-hidden overflow-y-auto fixed inset-0'
    >
      <div className='relative w-auto mx-auto max-w-3xl rounded-lg overflow-hidden'>
        <div
          className={`${isVisible ? 'scale-100' : 'scale-0'}
          transform duration-300 relative flex-auto bg-white dark:bg-bgDark drop-shadow-md rounded-lg`}
        >
          <div className='relative max-h-full min-w-[350px]'>
            <div onClick={() => handleClose()} className='absolute top-2 right-2 rounded-full p-2 bg-slate-100 cursor-pointer'>
              <XMarkIcon className='text-black w-6' />
            </div>

            <Image
              className='rounded-lg object-cover'
              src={food?.img}
              alt={food?.name}
              width={350}
              height={200}
              style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
            />
            <div className='my-2 mx-1 flex flex-col justify-between gap-5'>
              {food?.company.id && (
                <Link href={`restaurant/${food?.company.id}`}>
                  <div className='w-full flex justify-end -mt-9'>
                    <h1 className='text-md text-title font-bold italic text-right cursor-pointer bg-bg dark:bg-black opacity-90 px-4 pt-1 -mx-1 w-fit rounded-ss-2xl'>
                      {food?.company.name}
                    </h1>
                  </div>
                </Link>
              )}
              <h1 className='text-lg '>{food.name}</h1>
              <h2> {convertPrice(food.price)}</h2>
              <div className='flex justify-between mb-2'>
                <div className='border-2 p-2 flex gap-5'>
                  {cant > 1 ? (
                    <MinusSmallIcon className='w-6 cursor-pointer' onClick={() => handleCant(-1)} />
                  ) : (
                    <TrashIcon className='w-5 cursor-pointer' onClick={() => handleClose()} />
                  )}
                  <h1 className='font-extrabold'>{cant}</h1>
                  <PlusSmallIcon className='w-6 cursor-pointer' onClick={() => handleCant(1)} />
                </div>
                <h1 className='p-2 text-lg font-extrabold'>{convertPrice(total)}</h1>
                <AddToCartButton product={{ id: food.id, cant, companyId: food.company.id }} closeModal={closeModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodModal
