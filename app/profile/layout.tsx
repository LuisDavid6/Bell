import { ReactNode } from 'react'
import Menu from './components/Menu'
import { getSession } from '@/lib/getSession'
import { redirect } from 'next/navigation'

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getSession()

  if (!session) redirect('/home')

  if (session?.user.role === 'admin') redirect('/admin')

  if (session?.user.role === 'company') redirect('/dashboard')

  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}

export default layout
