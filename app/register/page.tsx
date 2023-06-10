import UserRegister from '@/components/UserRegister'
import React from 'react'

const Register = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-bg2'>
      <h1 className='text-title text-3xl font-bold mb-4'>Bell's</h1>
      <div className='bg-white w-5/6 p-4 rounded-lg'>
        <div className='flex sm:justify-between items-center max-sm:flex-col max-sm:w-full max-sm:gap-4 mb-1'>
          <h2 className='text-2xl max-sm:w-full font-bold'>Crea tu cuenta</h2>
          <h4 className='text-md text-title underline cursor-pointer max-sm:w-full max-sm:text-right'>
            Registrarme como empresa
          </h4>
        </div>
        <hr></hr>
        <UserRegister />
      </div>
    </div>
  )
}

export default Register
