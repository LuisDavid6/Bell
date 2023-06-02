'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

interface Props {
  signOut: () => void
}

const LogOutButton = () => {
  return (
    <button className='bg-orange-500 p-2 text-white rounded mt-2' onClick={() => signOut()}>
      Logout
    </button>
  )
}

export default LogOutButton
