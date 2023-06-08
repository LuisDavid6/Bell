import Link from 'next/link'
import React from 'react'
import LogOutButton from '@/components/LogoutButton'
import Cart from '@/components/Cart'
import Search from '@/components/Search'

interface Props {
  email: string
}

const NavBar: React.FC<Props> = ({ email }) => {
  return (
    <div className='bg-bg px-4 py-4'>
      <div className='flex gap-5 justify-between items-center'>
        <Link href='/home'>
          <h1 className='text-4xl text-btn font-bold'> Bell's </h1>
        </Link>
        <div className='relative w-3/6 '>
          <Search />
        </div>

        {email ? (
          <div className='flex gap-2'>
            <Cart email={email} />
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
