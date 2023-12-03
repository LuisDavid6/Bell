'use client'

import Input from '@/components/Input'
import { errorAlert, successAlert } from '@/lib/alerts'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import useAddCategory from '../../hooks/useAddCategory'

const AddCategoryForm = ({ closeModal }: { closeModal: () => void }) => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    if (category.length > 2) {
      const response = await useAddCategory(category)

      if (response === 'success') {
        successAlert('Categoria agregada con éxito')
        closeModal()
      } else errorAlert('Un error ha ocurrido')
    } else errorAlert('Debes ingresar mínimo 3 caracteres')

    setLoading(false)
    router.refresh()
  }

  return (
    <div className='mt-5'>
      <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
        <Input
          id='category'
          label='Nueva categoria'
          value={category}
          type='text'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
          register
        />

        <button
          type='submit'
          disabled={loading}
          className='bg-btn hover:bg-btn2 w-4/6 md:w-5/6 place-self-center mt-10 py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Agregar
        </button>
      </form>
    </div>
  )
}

export default AddCategoryForm
