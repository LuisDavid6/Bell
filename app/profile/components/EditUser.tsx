'use client'
import { FC, ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { PencilIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import Input from './Input'

interface Props {
  info: {
    username: string
    email: string
    tel: string
    address: string
    avatar: string
  }
}
const EditUser: FC<Props> = ({ info: { username, email, tel, address, avatar } }) => {
  const [user, setUser] = useState({ username, email, tel, address, avatar })

  return (
    <div className='flex flex-col sm:ml-16 px-2'>
      <div className='flex gap-5 items-center mb-4 relative'>
        <Image
          src={avatar}
          alt='avatar de usuario'
          width={120}
          height={100}
          className='rounded-full'
        />
        <PencilIcon className='w-5 absolute bottom-0 left-24' />
        <div className='flex flex-col gap-1'>
          <h2 className='text-xl font-bold'>{username}</h2>
          <h3 className='text-md font-light'>{email}</h3>
        </div>
      </div>

      <hr />

      <div className='flex flex-col gap-y-5 mt-8 max-w-lg'>
        <section className='flex items-center gap-5'>
          <h4 className='text-lg font-bold w-1/4'>username:</h4>
          <Input
            id='username'
            type='text'
            value={user.username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, username: e.target.value })
            }
          />
        </section>
        <section className='flex items-center gap-5'>
          <h4 className='text-lg font-bold w-1/4'>email:</h4>
          <Input
            id='email'
            type='text'
            value={user.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, email: e.target.value })
            }
          />
        </section>
        <section className='flex items-center gap-5'>
          <h4 className='text-lg font-bold w-1/4'>teléfono:</h4>
          <Input
            id='tel'
            type='text'
            value={user.tel}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, tel: e.target.value })
            }
          />
        </section>
        <section className='flex items-center gap-5'>
          <h4 className='text-lg font-bold w-1/4'>dirección:</h4>
          <Input
            id='address'
            type='text'
            value={user.address}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, address: e.target.value })
            }
          />
        </section>
      </div>
    </div>
  )
}

export default EditUser
