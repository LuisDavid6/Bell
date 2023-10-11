'use client'

import { TrashIcon } from '@heroicons/react/24/outline'
import UseDeleteFood from '../../hooks/UseDeleteFood'
import { errorAlert, successAlert } from '@/lib/alerts'
import { useRouter } from 'next/navigation'

const DeleteProductButton = ({ id }: { id: string }) => {
  const router = useRouter()

  const deleteFood = async () => {
    const response = await UseDeleteFood(id)

    if (response === 'success') {
      successAlert('Producto eliminado con éxito')
      router.refresh()
    } else errorAlert('Un error ha ocurrido')
  }

  return <TrashIcon className='w-5 cursor-pointer' onClick={deleteFood} />
}

export default DeleteProductButton
