'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

interface Props {
  signOut: () => void
}

const LogOutButton = () => {
  return (
    <button
      className='bg-btn py-2 px-4 text-white rounded-full transition duration-500 ease-in-out hover:scale-110 hover:bg-btn2'
      onClick={() => signOut()}
    >
      Cerrar sesion
    </button>
  )
}

export default LogOutButton
