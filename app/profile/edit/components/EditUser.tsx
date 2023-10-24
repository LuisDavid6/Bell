'use client'

import { FC, ChangeEvent, useState, BaseSyntheticEvent } from 'react'
import Image from 'next/image'
import { PencilIcon } from '@heroicons/react/24/solid'
import Input from './Input'
import useUpdateUser from '@/hooks/useUpdateUser'
import { errorAlert, successAlert } from '@/lib/alerts'
import { useRouter } from 'next/navigation'

interface Props {
  info: {
    id: string
    username: string
    email: string
    tel: string
    address: string
    avatar: string
  }
}
const EditUser: FC<Props> = ({ info: { id, username, email, tel, address, avatar } }) => {
  const router = useRouter()

  const [user, setUser] = useState({ username, tel, address, avatar })
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFileChange = (event: BaseSyntheticEvent) => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  const uploadImage = async () => {
    if (selectedFile) {
      const formData = new FormData()

      formData.append('file', selectedFile)
      formData.append('upload_preset', 'ztqdlglo')
      formData.append('folder', 'Bell/avatars')

      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
          method: 'POST',
          body: formData,
        })
        const file = await res.json()
        return file.secure_url
      } catch (error) {
        errorAlert('Error al cargar la imagen')
      }
    }
  }

  const handleSave = async () => {
    setLoading(true)

    const imageUrl = await uploadImage()

    const response = await useUpdateUser(id, { ...user, avatar: imageUrl })
    if (response === 'success') {
      successAlert('Datos actualizados con éxito')
      router.refresh()
    } else errorAlert('Un error ha ocurrido')

    setLoading(false)
  }

  return (
    <div className='flex flex-col px-2 justify-center items-center w-full gap-3'>
      <div className='flex gap-5 items-center justify-center mb-4 w-full'>
        <section className='relative'>
          <Image
            src={selectedFile ? URL.createObjectURL(selectedFile) : avatar}
            alt='avatar de usuario'
            width='0'
            height='0'
            sizes='100vw'
            style={{ objectFit: 'cover', width: '120px', height: '120px' }}
            className='w-full h-auto rounded-full object-cover'
          />
          <div className='absolute bottom-0 right-1 bg-neutral-300 dark:bg-neutral-600 rounded-full p-2 cursor-pointer'>
            <label htmlFor='img' className='bg-gray-600 text-white rounded-md cursor-pointer'>
              <PencilIcon className='text-white w-5' />
            </label>
            <input id='img' type='file' accept='image/*' className='hidden opacity-0, overflow-hidden absolute z-10' onChange={handleFileChange} />
          </div>
        </section>
        <div className='flex flex-col gap-1'>
          <h2 className='text-xl font-bold'>{username}</h2>
          <h3 className='text-md font-light'>{email}</h3>
        </div>
      </div>

      <hr />

      <div className='flex flex-col gap-y-5 mt-8 max-w-lg pb-2 w-full justify-center'>
        <section className='flex items-center gap-5'>
          <h4 className='text-lg font-bold w-1/4'>username:</h4>
          <Input
            id='username'
            type='text'
            value={user.username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, username: e.target.value })}
          />
        </section>
        <section className='flex items-center gap-5'>
          <h4 className='text-lg font-bold w-1/4'>teléfono:</h4>
          <Input id='tel' type='text' value={user.tel} onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, tel: e.target.value })} />
        </section>
        <section className='flex items-center gap-5'>
          <h4 className='text-lg font-bold w-1/4'>dirección:</h4>
          <Input
            id='address'
            type='text'
            value={user.address}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, address: e.target.value })}
          />
        </section>
        <button
          onClick={handleSave}
          disabled={loading}
          className='bg-btn hover:bg-btn2 w-3/6 place-self-center mt-10 py-2 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Guardar cambios
        </button>
      </div>
    </div>
  )
}

export default EditUser
