import { ReactNode } from 'react'
import { getSession } from '@/lib/getSession'
import { redirect, notFound } from 'next/navigation'
import Menu from '@/app/(company)/components/Menu'
import MenuMobile from './components/MenuMobile'

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getSession()

  if (!session) notFound()

  if (session?.user.role === 'admin') redirect('/admin')

  if (session?.user.role === 'user') redirect('/home')

  return (
    <div className='flex gap-4'>
      <section className='hidden md:flex'>
        <Menu />
      </section>
      <section className='flex md:hidden'>
        <MenuMobile />
      </section>
      <div>
        <div className='mt-4'>
          <h2 className='text-2xl font-bold mb-4'>{session?.user?.username?.toUpperCase()}</h2>
          <hr />
        </div>
        {children}
      </div>
    </div>
  )
}

export default layout
