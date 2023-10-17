import LoginForm from './components/LoginForm'
import React from 'react'
import { getSession } from '@/lib/getSession'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/components/Logo'

const Login = async () => {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-8'>
      <Link href='/home'>
        <Logo width={300} height={100} />
      </Link>
      <LoginForm />
    </div>
  )
}

export default Login
