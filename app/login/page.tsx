import LoginForm from '@/components/LoginForm'
import React from 'react'
import { getSession } from '@/lib/getSession'
import { redirect } from 'next/navigation'

const Login = async () => {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div>
      Login
      <LoginForm />
    </div>
  )
}

export default Login
