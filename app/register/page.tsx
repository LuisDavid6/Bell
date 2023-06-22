import UserRegister from '@/components/UserRegister'
import RestaurantRegister from '@/components/RestaurantRegister'
import Link from 'next/link'
import React from 'react'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/getSession'

interface Props {
  searchParams: { company: boolean }
}

const Register = async ({ searchParams: { company } }: Props) => {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-bg2'>
      <Link href='/home'>
        <h1 className='text-title text-3xl font-bold mb-4'>Bell's</h1>
      </Link>
      <div className='bg-white w-5/6 p-4 rounded-lg'>
        <div className='flex sm:justify-between items-center max-sm:flex-col max-sm:w-full max-sm:gap-4 mb-1'>
          <h2 className='text-2xl max-sm:w-full font-bold'>Crea tu cuenta</h2>
          {company ? (
            <Link href='register'>
              <h4 className='text-md text-title underline cursor-pointer max-sm:w-full max-sm:text-right'>
                Registrarme como usuario
              </h4>
            </Link>
          ) : (
            <Link href='register?company=true'>
              <h4 className='text-md text-title underline cursor-pointer max-sm:w-full max-sm:text-right'>
                Registrarme como empresa
              </h4>
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
