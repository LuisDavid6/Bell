import { ReactNode } from 'react'
import { getSession } from '@/lib/getSession'
import NavBar from '@/components/NavBar'
import { redirect } from 'next/navigation'

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getSession()

  if (session?.user.role === 'admin') redirect('/admin')

  if (session?.user.role === 'company') redirect('/dashboard')

  return (
    <div>
      <NavBar email={session?.user?.email || ''} />
      {children}
    </div>
  )
}

export default layout
