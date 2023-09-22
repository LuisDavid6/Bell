import Link from 'next/link'
import React from 'react'
import LogOutButton from '@/components/LogoutButton'
import Cart from '@/components/Cart'
import Search from '@/components/Search'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'

interface Props {
  email: string
}

const NavBar: React.FC<Props> = ({ email }) => {
  return (
    <div className='bg-bg px-4 py-4'>
      <div className='flex gap-5 justify-between items-center'>
        <Link href='/home'>
          <Image src={logo} alt='logo' width={170} height={100} />
        </Link>
        <div className='w-3/6 max-[580px]:hidden'>
          <Search />
        </div>

        {email ? (
          <div className='flex items-center gap-2'>
            <Cart email={email} />
            <LogOutButton />
            <Link href='profile/edit'>
              <UserCircleIcon className='w-8 transition duration-500 ease-in-out hover:scale-110 hover:text-title' />
            </Link>
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
            <Link href='/register'>
              <button
                className='bg-btn py-2 px-4 text-white rounded-full transition duration-500
              ease-in-out hover:scale-110 hover:bg-btn2'
              >
                Registrarse
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className='flex justify-center mt-3 min-[580px]:hidden'>
        <div className='relative w-5/6'>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default NavBar
