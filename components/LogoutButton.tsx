'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'

interface Props {
  signOut: () => void
}

const LogOutButton = () => {
  return (
    <button
      className='bg-transparent font-bold py-2 px-3 flex items-center gap-1 rounded-full transition duration-500 ease-in-out hover:scale-110 hover:text-title'
      onClick={() => signOut()}
    >
      <ArrowRightOnRectangleIcon className='w-6' />
      Salir
    </button>
  )
}

export default LogOutButton
