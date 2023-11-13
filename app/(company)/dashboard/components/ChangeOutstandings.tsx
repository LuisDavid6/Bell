'use client'

import Image from 'next/image'
import { Company } from '@/types'
import { convertPrice } from '@/pipes/convertPrice.pipe'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import useUpdateOutstandings from '../../hooks/useUpdateOutstandings'
import { errorAlert, successAlert } from '@/lib/alerts'
import { useRouter } from 'next/navigation'

const ChangeOutstandings = ({ closeModal, company }: { closeModal: () => void; company: Company }) => {
  const router = useRouter()

  const [outstandings, setOutstandings] = useState(company.outstandings)
  const [loading, setLoading] = useState(false)

  const update = async () => {
    setLoading(true)

    const foodsId: string[] = []

    outstandings.forEach((food) => {
      foodsId.push(food.id)
    })

    const response = await useUpdateOutstandings(foodsId)

    if (response === 'success') {
      successAlert('Destacados actualizados con éxito')
      closeModal()
    } else errorAlert('Un error ha ocurrido')

    setLoading(false)
    router.refresh()
  }

  return (
    <div className='my-5'>
      <h3 className='text-xl text-center mb-5'>Destacados</h3>
      <section className='flex flex-wrap gap-3 justify-center mb-5'>
        {outstandings.map((food) => (
          <div className='flex flex-col items-center gap-1 max-w-[90px] sm:max-w-[320px] relative'>
            <Image
              alt={food.name}
              src={food.img}
              width={150}
              height={120}
              className='rounded-lg'
              style={{ objectFit: 'cover', width: '150px', height: '120px' }}
            />
            <h3 className='text-sm text-center'>{food.name}</h3>
            <h3 className='text-md text-title'>{convertPrice(food.price)}</h3>
            <div
              onClick={() => setOutstandings(outstandings.filter((f) => f.id !== food.id))}
              className='absolute top-0 right-0 rounded-full p-2 bg-slate-100 dark:bg-gray-400 cursor-pointer'
            >
              <XMarkIcon className='text-black w-5' />
            </div>
          </div>
        ))}
      </section>

      <hr />

      <section className='flex flex-wrap gap-3 justify-center mt-5'>
        {company.foods.map((food) => (
          <div
            className='flex flex-col items-center gap-1 max-w-[90px] sm:max-w-[320px]'
            onClick={() => outstandings.length < 3 && !outstandings.find((f) => f.id === food.id) && setOutstandings([...outstandings, food])}
          >
            <Image
              alt={food.name}
              src={food.img}
              width={150}
              height={120}
              className='rounded-lg'
              style={{ objectFit: 'cover', width: '150px', height: '120px' }}
            />
            <h3 className='text-sm text-center'>{food.name}</h3>
            <h3 className='text-md text-title'>{convertPrice(food.price)}</h3>
          </div>
        ))}
      </section>

      <section className='flex gap-2 w-full justify-center'>
        <button
          onClick={update}
          disabled={loading}
          className='bg-btn hover:bg-btn2 w-3/6 md:w-2/6 place-self-center mt-10 py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Guardar
        </button>
        <button
          onClick={closeModal}
          disabled={loading}
          className='bg-gray-600 hover:bg-gray-700 w-3/6 md:w-2/6 place-self-center mt-10 py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Cancelar
        </button>
      </section>
    </div>
  )
}

export default ChangeOutstandings
