import Link from 'next/link'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import LogOutButton from '@/components/LogoutButton'
import Cart from '@/components/Cart'
import { Cart as CartInterface } from '@/types'

interface Props {
  session: boolean
  userCart: CartInterface
}

const NavBar: React.FC<Props> = ({ session, userCart }) => {
  return (
    <div className='bg-bg px-4 py-4'>
      <div className='flex gap-5 justify-between items-center'>
        <Link href='/'>
          <h1 className='text-4xl text-btn font-bold'> Bell's </h1>
        </Link>
        <div className='relative w-3/6 '>
          <MagnifyingGlassIcon className='absolute left-0 bottom-2 ml-2 w-5' />
          <input
            className='rounded-md bg-transparent w-full border-2 border-btn focus:outline-btn placeholder-black pl-8 py-1'
            placeholder='buscar...'
          />
        </div>

        {session ? (
          <div className='flex gap-2'>
            <Cart userCart={userCart} />
            <LogOutButton />
          </div>
        ) : (
          <div className='flex gap-2'>
            <Link href='/login'>
              <button
                className='bg-btn py-2 px-4 text-white rounded-full transition duration-500
                ease-in-out hover:scale-110 hover:bg-btn2'
              >
                Ingresar
              </button>
            </Link>
            <button
              className='bg-btn py-2 px-4 text-white rounded-full transition duration-500
                ease-in-out hover:scale-110 hover:bg-btn2'
            >
              Registrarse
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
