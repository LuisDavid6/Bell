import LoginForm from './components/LoginForm'
import React from 'react'
import { getSession } from '@/lib/getSession'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'

const Login = async () => {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-8'>
      <Link href='/home'>
        <Image src={logo} alt='logo' width={300} height={100} />
      </Link>
      <LoginForm />
    </div>
  )
}

export default Login
