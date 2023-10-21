'use client'

import { errorAlert, successAlert } from '@/lib/alerts'
import { useRouter } from 'next/navigation'
import useDeleteCategory from '../../hooks/useDeleteCategory'
import { BackspaceIcon } from '@heroicons/react/24/solid'

const DeleteCategoryButton = ({ name }: { name: string }) => {
  const router = useRouter()

  const deleteCategory = async () => {
    const response = await useDeleteCategory(name)

    if (response === 'success') {
      successAlert('Categoria eliminada con éxito')
      router.refresh()
    } else errorAlert('Un error ha ocurrido')
  }

  return <BackspaceIcon className='w-6 cursor-pointer mr-4' onClick={deleteCategory} />
}

export default DeleteCategoryButton
