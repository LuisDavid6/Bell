import LoginForm from '@/components/LoginForm'
import React from 'react'
import { getSession } from '@/lib/getSession'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const Login = async () => {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-8 bg-bg2'>
      <Link href='/home'>
        <h1 className='text-3xl text-title font-bold'>Bell's</h1>
      </Link>
      <LoginForm />
    </div>
  )
}

export default Login
