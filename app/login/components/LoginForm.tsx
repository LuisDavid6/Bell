'use client'

import React from 'react'
import Input from '@/components//Input'
import { useState } from 'react'
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ status: false, message: '' })
  const [loading, setLoading] = useState(false)

  const login = async () => {
    setLoading(true)

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/',
    })

    if (res?.error) {
      setError({ status: true, message: res.error })
      setLoading(false)
      return
    }

    router.replace('/')
    router.refresh()
  }

  return (
    <div className='max-w-sm flex flex-col items-center gap-4'>
      <div className='flex gap-2 items-baseline'>
        <UserIcon className='w-6' />
        <Input id='email' type='text' label='Email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      </div>
      <div className='flex gap-2 items-baseline'>
        <LockClosedIcon className='w-6' />
        <Input
          id='password'
          type='password'
          label='Contraseña'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </div>
      <button
        className='bg-btn py-2 px-4 text-white rounded-full transition duration-500 ease-in-out hover:scale-110 hover:bg-btn2 p-2 mt-5 w-9/12 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={loading}
        onClick={login}
      >
        Ingresar
      </button>

      <button
        className='bg-black py-2 px-4 text-white rounded-full transition duration-500 ease-in-out hover:scale-110 hover:bg-stone-800 p-2 mt-5 w-9/12'
        onClick={() => signIn('google')}
      >
        Ingresa con Google
      </button>
      {error.status && (
        <div className='mt-10 bg-red-500 p-3 rounded text-white'>
          <h3 className='text-center mb-2 text-lg font-bold'>! Error</h3>
          <h3 className='text-center font-semibold'>{error.message}</h3>
        </div>
      )}
    </div>
  )
}

export default LoginForm
