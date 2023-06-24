'use client'
import { usePathname } from 'next/navigation'
import {
  BellAlertIcon,
  HomeIcon,
  PresentationChartLineIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import LogOutButton from '@/components/LogoutButton'

const Menu = () => {
  const pathname = usePathname()

  const isActive = (patch: string) => {
    return pathname.includes(patch)
  }

  return (
    <div className='min-h-screen bg-bg p-4'>
      <h2 className='text-3xl font-bold pl-3 mb-3'>Bell's</h2>
      <hr className='font-bold' />
      <div className='w-fit mt-5 '>
        <Link href='/dashboard'>
          <section
            className={`${
              isActive('dashboard') && 'bg-title text-white'
            } flex gap-3 pl-5 pr-10 py-3 rounded-3xl cursor-pointer`}
          >
            <HomeIcon className='w-5' />
            <h5 className='text-lg font-semibold'>Inicio</h5>
          </section>
        </Link>
        <Link href='/products'>
          <section
            className={`${
              isActive('products') && 'bg-title text-white'
            } flex gap-3 pl-5 pr-10 py-3 rounded-3xl cursor-pointer`}
          >
            <ShoppingBagIcon className='w-5' />
            <h5 className='text-lg font-semibold'>Productos</h5>
          </section>
        </Link>
        <Link href='/orders?status=pending'>
          <section
            className={`${
              isActive('orders') && 'bg-title text-white'
            } flex gap-3 pl-5 pr-10 py-3 rounded-3xl cursor-pointer`}
          >
            <BellAlertIcon className='w-5' />
            <h5 className='text-lg font-semibold'>Pedidos</h5>
          </section>
        </Link>
        <Link href='/balance'>
          <section
            className={`${
              isActive('balance') && 'bg-title text-white'
            } flex gap-3 pl-5 pr-10 py-3 rounded-3xl cursor-pointer`}
          >
            <PresentationChartLineIcon className='w-5' />
            <h5 className='text-lg font-semibold'>Finanzas</h5>
          </section>
        </Link>
        <section className='flex justify-center mt-16'>
          <LogOutButton />
        </section>
      </div>
    </div>
  )
}

export default Menu
