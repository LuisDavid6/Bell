import Link from 'next/link'
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import LogOutButton from '@/components/LogoutButton'

interface Props {
  session: boolean
}

const NavBar: React.FC<Props> = ({ session }) => {
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
            <button
              // onClick={toggleDrawer}
              className='bg-btn py-2 px-4 text-white rounded-full transition duration-500 
                ease-in-out hover:scale-110 hover:bg-btn2'
            >
              Carrito
            </button>
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

      {/* <Drawer
        size={350}
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        style={{ height: '100%' }}
        className=''
      >
        <Cart />
      </Drawer> */}
    </div>
  )
}

export default NavBar
