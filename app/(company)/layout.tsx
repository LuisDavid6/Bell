import { ReactNode } from 'react'
import { getSession } from '@/lib/getSession'
import { redirect, notFound } from 'next/navigation'
import Menu from '@/components/Menu'

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getSession()

  if (!session) notFound()

  if (session?.user.role === 'admin') redirect('/admin')

  if (session?.user.role === 'user') redirect('/home')

  return (
    <div className='flex'>
      <Menu />
      <>{children}</>
    </div>
  )
}

export default layout
