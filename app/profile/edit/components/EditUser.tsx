'use client'

import { FC, ChangeEvent, useState } from 'react'
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
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)

    const response = await useUpdateUser(id, user)
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
          <Image src={avatar} alt='avatar de usuario' width={120} height={100} className='rounded-full' />
          <div className='absolute bottom-0 right-1 bg-neutral-300 dark:bg-neutral-600 rounded-full p-2 cursor-pointer'>
            <PencilIcon className='w-5' />
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
