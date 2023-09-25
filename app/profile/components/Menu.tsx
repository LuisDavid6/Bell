'use client'

import Logo from '@/components/Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
  const pathname = usePathname()

  const isActive = (patch: string) => {
    return pathname.includes(patch)
  }

  return (
    <div className='bg-bg px-4 py-4 flex justify-between items-center max-sm:flex-col max-sm:gap-5'>
      <Link href='/home'>
        <Logo width={170} height={100} />
      </Link>
      <div className='flex items-center font-semibold text-lg max-sm:text-sm'>
        <Link href='profile/edit'>
          <section className={`${isActive('edit') && 'bg-title text-white'} py-2 px-3 rounded-se-2xl rounded-es-2xl cursor-pointer`}>
            <h5>Editar datos</h5>
          </section>
        </Link>
        <Link href='profile/orders'>
          <section className={`${isActive('orders') && 'bg-title text-white'} py-2 px-3 rounded-se-2xl rounded-es-2xl cursor-pointer`}>
            <h5>Pedidos</h5>
          </section>
        </Link>
        <Link href='profile/history'>
          <section className={`${isActive('history') && 'bg-title text-white'} py-2 px-3 rounded-se-2xl rounded-es-2xl cursor-pointer`}>
            <h5>Historial</h5>
          </section>
        </Link>
      </div>
    </div>
  )
}

export default Menu
