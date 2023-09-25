import UserRegister from './components/UserRegister'
import RestaurantRegister from './components/RestaurantRegister'
import Link from 'next/link'
import React from 'react'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/getSession'
import Logo from '@/components/Logo'

interface Props {
  searchParams: { company: boolean }
}

const Register = async ({ searchParams: { company } }: Props) => {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <Link href='/home'>
        <Logo width={250} height={100} />
      </Link>
      <div className='w-5/6 p-4 rounded-lg'>
        <div className='flex sm:justify-between items-center max-sm:flex-col max-sm:w-full max-sm:gap-4 mb-1'>
          <h2 className='text-2xl max-sm:w-full font-bold'>Crea tu cuenta</h2>
          {company ? (
            <Link href='register'>
              <h4 className='text-md text-title underline cursor-pointer max-sm:w-full max-sm:text-right'>Registrarme como usuario</h4>
            </Link>
          ) : (
            <Link href='register?company=true'>
              <h4 className='text-md text-title underline cursor-pointer max-sm:w-full max-sm:text-right'>Registrarme como empresa</h4>
            </Link>
          )}
        </div>
        <hr />
        {company ? <RestaurantRegister /> : <UserRegister />}
      </div>
    </div>
  )
}

export default Register
